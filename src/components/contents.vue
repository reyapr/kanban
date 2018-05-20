<template>
        <div class="container">
            <div class="row" >
                <div class="container col-9" style='margin:auto'>
                    <!-- To Do -->
                 
                    <listContent 
                    v-for = '(list,key) in getTask'
                    :list = 'list'
                    :titlePosition = 'key'
                    :position = 'titlePosition'
                    :key='key'
                    @remove='remove'
                    @moving='move'
                    @addTask='addTask'
                    >
                    </listContent>
                </div>
            </div>
        </div>
</template>  

<script src="https://www.gstatic.com/firebasejs/5.0.2/firebase.js"></script>

<script>
    import listContent from '@/components/listContent'
    import {db} from '../firebase'
    

    export default {
        name: 'home',
        data() {
            return {
                titlePosition:['Back Log','To Do','Doing','Done']
            }
        }, 
        firebase: {
            tasks:db.ref('tasks'),
        },
        methods: {
            remove(key){
              this.$firebaseRefs.tasks.child(key).remove()
            },
            move(updatedTask,key){
                this.$firebaseRefs.tasks.child(key).set(updatedTask)
            },
            addTask(newTask){
                this.$firebaseRefs.tasks.push(newTask)
                return this.get()
            },
            get(){
                let allTasks = {
                    0:{name:'Back Log'},
                    1:{name:'To Do'},
                    2:{name:'Doing'},
                    3:{name:'Done'}
                }
                this.tasks.forEach(task=>{
                    if(allTasks[task.position].list==undefined ){
                        allTasks[task.position].list = []
                        allTasks[task.position].keys = []
                        allTasks[task.position].descriptions = []
                    }
                    allTasks[task.position].list.push(task.title) 
                    allTasks[task.position].keys.push(task['.key'])   
                    allTasks[task.position].descriptions.push(task.description)   
                })
                return allTasks
            }
        },
        components:{
            listContent
        },
        computed:{
            getTask(){
                return this.get()
            }
        }
    }
</script>   
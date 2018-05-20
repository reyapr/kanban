

<template>
    <div class='col-sm-3' style="background-color: azure;margin-top:7%;" >
        <h3>{{list.name}}</h3>
        <div class='col-sm-9' style="padding: 0">
            <input @keyup.13="addToList" v-model='newTask.title' type="text" class="form-control col-sm-1" id="usr" placeholder="press enter to submit">
        </div>

        <div class='col-sm-3' style="padding: 0">
            <div class="dropdown">
                <button @click='addToList' class="btn btn-info" type="button" style="width: 100%">Add
                </button>
            </div>
        </div>
        <br><br>
            <task
            v-for='(task,index) in list.list'
            :task = 'task'
            :status = 'list.name'
            :index = 'index'
            :post = 'position'
            :titlePost= 'titlePosition'
            :uniqueKey='list.keys'
            :description='list.descriptions'
            @remove = 'remove'
            @moved='move'
            :key='index'
            >
            </task>
    </div>
</template>  

<script>
    import task from '@/components/task.vue'
    import {db} from '../firebase'

    export default {
        props:['position','titlePosition','list'],
        data(){
            return {
                contentName:'',
                listName:'',
                anotherList:[],
                newTask: {
                    title: '',
                    description: '',
                    status: this.list.name,
                    position: this.titlePosition
                },
                
            }
        },
        firebase: {
            task:db.ref('task')
        },
        methods:{
            addToList() {
                this.$emit('addTask',this.newTask)                
            },
            move(updatedTask, key) {
                this.$emit('moving',updatedTask,key)
            },
            remove(key){
                this.$emit('remove',key)
            }
        },
        components:{
            task
        }
    }
</script>          
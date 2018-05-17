<template>
        <div class="container">
            <div class="row" >
                <div class="container col-9" style='margin:auto'>
                    <!-- To Do -->
                    <listContent 
                    v-for = '(list,index) in allList'
                    :item = 'list'
                    :list = 'list'
                    :getall = 'allList'
                    :x = 'index'
                    :key='index'
                    @change-task='changeTask'
                    @moving='move'
                    >
                    </listContent>
                </div>
            </div>
        </div>
</template>  

<script src="https://www.gstatic.com/firebasejs/5.0.2/firebase.js"></script>

<script>
    import listContent from '@/components/listContent'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBhs6KLNnRid5Def8ydBZo1c7OeixBFrP0",
    authDomain: "kanban-9bb44.firebaseapp.com",
    databaseURL: "https://kanban-9bb44.firebaseio.com",
    projectId: "kanban-9bb44",
    storageBucket: "kanban-9bb44.appspot.com",
    messagingSenderId: "486638130049"
  };

  firebase.initializeApp(config);

  
    export default {
        name: 'home',
        data() {
            return {
                allList:[
                    {
                        name:'To Do',
                        list: ['makan', 'minum', 'tidur']
                    },
                    {
                        name:'Doing',
                        list: ['lari', 'istirahat']
                    },
                    {
                        name:'Done',
                        list: ['tugas', 'lulus']
                    },
                ],
            }
        }, 
        methods: {
            changeTask(val,x,y){
                this.x = x
                this.y = y
                this.allList[x].list.splice(y,1,val)
            },
            move(nameList,position,add,movedName,x,y){
                this.allList.forEach(content=>{
                    if(content.name==nameList){
                        content.list.splice(position-1,0,add)
                    }
                })
                this.allList[x].list.splice(y,1)
            }
        },
        watch:{
            allList(val){
                this.updatedList = val
            }
        },
        components:{
            listContent
        }
    }
</script>   
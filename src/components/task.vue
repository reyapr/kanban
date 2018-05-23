<template>
        <div style="padding: 0%;margin-top:2%" class="col-sm-12">
      
            <div v-if="status=='Done'" class='col-sm-3' style="padding: 0px">
                <button  @click="update(status,-1)" class="btn btn-default glyphicon glyphicon-arrow-left" type="button" style="width: 100%">
                </button>
            </div>
                 <button v-if="status=='Done'" data-toggle="modal" :data-target="'#'+modalId" class='col-sm-9 btn btn-info' >
                    {{task}}
                 </button>  

             
          

            <button v-if="status=='Back Log'" data-toggle="modal" :data-target="'#'+modalId" class='col-sm-9 btn btn-info' >
                {{task}}
            </button>

            <div v-if="status=='Back Log'" class='col-sm-3 ' style="padding: 0px;">
                <button @click="update(status,1)" class="btn btn-default glyphicon glyphicon-arrow-right" type="button" style="width: 100%">
                </button>
            </div>

            <div v-if="status!='Done' && status!='Back Log'" class='col-sm-3 ' style="padding: 0px">
                <button @click="update(status,-1)"  class="btn btn-default glyphicon glyphicon-arrow-left" type="button" style="width: 100%">
                </button>
            </div>

            <button v-if="status!='Done' && status!='Back Log'" data-toggle="modal" :data-target="'#'+modalId" class='col-sm-6 btn btn-info' >
                {{task}}
            </button>

            <div v-if="status!='Done' && status!='Back Log'" class='col-sm-3 ' style="padding: 0px">
                <button @click="update(status,1)"  class="btn btn-default glyphicon glyphicon-arrow-right" type="button" style="width: 100%">
                </button>
            </div>

              <taskModal
            :modalId = 'modalId'
            :task = 'task'
            :status = 'status'
            :description = 'description[index]'
            :uniqueKey = 'uniqueKey[index]'
            @edited = 'update'
            @remove = 'remove'
            />

        </div> 
</template>

<script>
    import taskModal from '@/components/taskModal'

    export default {
        props: ['task','uniqueKey','status','post','index','description','titlePost'],
        components:{
            taskModal
        },
        methods:{
            update(status,changeTo,task,desc){
                let position = this.post.indexOf(status)
                
                let updatedTask = {}

                if(task != undefined && desc !=undefined){
                    console.log(desc)
                    updatedTask.title = task
                    updatedTask.description = desc
                    updatedTask.status = status
                    updatedTask.position = this.titlePost
                }else{
                    updatedTask.title = this.task
                    updatedTask.description = this.description[this.index]
                    updatedTask.position = Number(this.titlePost) + changeTo
                    switch(updatedTask.position){
                        case 0:
                            updatedTask.status = 'Back Log';
                        break;
                        case 1:
                            updatedTask.status = 'To Do';
                        break;
                        case 2:
                            updatedTask.status = 'Doing';
                        break;
                        case 3:
                            updatedTask.status = 'Done';
                        break;
                        default:
                        break;
                    }
                }
                let key = this.uniqueKey[this.index]
                this.$emit('moved',updatedTask,key)
            },
            remove(key){
                this.$emit('remove',key)
            }
        },
        computed:{
            modalId(){
                return this.titlePost + this.index
            }
        }
    }
</script>


<template>
    <div class='col-sm-4' style="background-color: azure;margin:0px;" >
        <h3>{{listName}}</h3>
        <div class='col-sm-9' style="padding: 0">
            <input @keyup.13="addToList" v-model='contentName' type="text" class="form-control col-sm-1" id="usr" placeholder="press enter to submit">
        </div>

        <div class='col-sm-3' style="padding: 0">
            <div class="dropdown">
                <button @click='addToList' class="btn btn-info" type="button" style="width: 100%">Add
                </button>
            </div>
        </div>
    
        <br><br>
        <!-- edit -->
        <task
        v-for='(getVal,index) in item.list'
        :value = 'getVal'
        :othercontent = 'anotherList'
        :getall = 'getall'
        :y = 'index'
        @change-val = 'changeVal'
        @moved='move'
        :key='index'
        >
        </task>
        
    </div>
</template>  

<script>
    import task from '@/components/task.vue'

    export default {
        props:['item','getall','x','list'],
        data(){
            return {
                contentName:null,
                listName:this.item.name,
                anotherList:[]
                
            }
        },
        methods:{
            addToList() {
                this.list.push(this.contentName)
            },
            move(nameList, position, add,y) {
                console.log(add,y)
                this.$emit('moving',nameList,position,add,this.listName,this.x,y)
            },
            changeVal(val,y){
                this.$emit('change-task',val,this.x,y)
            }
        },
      
        mounted() {
            this.getall.forEach(content=>{
                if(content.name!=this.listName){
                    this.anotherList.push(content)
                }
            })
        },
        components:{
            task
        }
    }
</script>          
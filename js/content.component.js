let content = `     <div class='col-sm-4' style="background-color: azure" >
                        <h3>{{listName}}</h3>
                        <div class='col-sm-9' style="padding: 0">
                            <input @keyup.13="addToList" v-model='contentName' type="text" class="form-control col-sm-1" id="usr" placeholder="press enter to submit">
                        </div>

                        <div class='col-sm-3' style="padding: 0">
                            <div class="dropdown">
                                <button class="btn btn-info" type="button" style="width: 100%">Add
                                </button>
                            </div>
                        </div>
                    
                        <br><br>

                        <!-- edit -->
                        <to-do-list
                        v-for='(getVal,index) in list'
                        :value = 'getVal'
                        :othercontent = 'anotherList'
                        :getall = getall
                        @moved='move'
                        :key='index'

                        >
                        </to-do-list>
                        
                        
                    </div>
            `
            

Vue.component('to-do',{
    props:['item','getall'],
    data(){
        return {
            contentName:null,
            listName:this.item.name,
            list:this.item.list,
            anotherList:[]
        }
    },
    template: content,
    methods:{
        addToList() {
            this.list.push(this.contentName)
        },
        move(nameList, position, add) {
            this.$emit('moving',nameList,position,add,this.listName)
        }
    },
    mounted() {
        this.getall.forEach(content=>{
            if(content.name!=this.listName){
                this.anotherList.push(content)
            }
        })
    }
})
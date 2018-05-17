<template>
        <div style="background-color: beige;padding: 0%;border: solid 1px silver;margin-top:2%" class="col-sm-12">
            <div class='col-sm-9' style="margin-top: 8px">
                {{value}}
            </div>

            <div class='col-sm-3 ' style="padding: 0">
                <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="modal" :data-target="'#'+getToDo" style="width: 100%">Action
                        <span class="caret"></span>
                    </button>
                    
                    <div :id="getToDo" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-sm">
                    
                            <!-- Modal content-->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="usr">To Do:</label>
                                        <input type="text" class="form-control" id="usr" v-model='getToDo'>
                                        <br>
                                        <label for="sel1">Move To:</label>
                                        
                                        <select class="form-control" id="sel1" v-model='getOther'>
                                            <option v-for='other in othercontent' >{{other.name}} </option>
                                            
                                        </select>
                                        <br>
                                        <label for="sel1">Position:</label>
                                        <select v-model='position' class="form-control" id="sel1" v-for='other in othercontent' v-if='other.name == getOther'>
                                            <option  v-for='n in other.list.length+1'> 
                                            {{n}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button @click='move' type="button" class="btn btn-default" data-dismiss="modal">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
</template>

<script>
    export default {
        props: ['value','othercontent','y'],
        data() {
            return {
                getToDo: this.value,
                toDo:null,
                anotherList:null,
                getOther:null,
                position:null
            }
        },
        methods:{
            move(){
                if(this.position!==null && this.getOther!==null){
                    this.$emit('moved',this.getOther,this.position,this.getToDo,this.y)
                }else{
                this.$emit('change-val',this.toDo,this.y)
                }
            }
        },
        watch:{
            getToDo(val){
                this.toDo = val
            }
        }
    }
</script>
<template>
    <div>
        <div :id="modalId" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label for="usr">Title:</label>
                        <input type="text" class="form-control" id="usr" v-model='editTask'>
                    </div>
                    <div class="form-group">
                        <label for="comment">Description:</label>
                        <textarea class="form-control" rows="5" id="comment" v-model='editDescription'></textarea>
                    </div>

                </div>
                <div class="modal-footer">
                    <button @click='remove' type="button" class="btn btn-danger" data-dismiss="modal" style='float:left'>Delete</button>
                    <button @click='edit' type="button" class="btn btn-info" data-dismiss="modal">Submit</button>
                </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['modalId','task','description','uniqueKey','status'],
        data(){
            return {
                editTask:this.task,
                editDescription:this.description
            }
        },
        methods:{
            edit(){
                this.$emit('edited', this.status, 0, this.editTask, this.editDescription )
            },
            remove(){
                this.$emit('remove',this.uniqueKey)
            }
        }
    }
</script>
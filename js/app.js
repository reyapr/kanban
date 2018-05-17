new Vue({
    el: '#app',
    data: {
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
            },{
                name:'tambahan',
                list:['tambah','satu']
            }
        ]
    },
    methods: {
        move(nameList,position,add,movedName){
            this.allList.forEach(content=>{
                if(content.name==nameList){
                    content.list.splice(position-1,0,add)
                }
                if (content.name == movedName) {
                    let post = content.list.indexOf(add)
                    content.list.splice(post, 1)
                    console.log(post,add)
                }
            })
        }
    },
})
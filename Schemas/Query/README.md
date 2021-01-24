# Query folder

Folder ini untuk menampung semua query pada grapql
Setiap file akan mewakili satu query pada graphql

Contoh Penggunaan :

```
module.exports={
    type:myType,
    description:'my description',
    args:{
        id:{
            type:myQlType
        }
    },
    resolver(parent,args){
        //  module lain untuk megambil data dari data table
    }

}


```

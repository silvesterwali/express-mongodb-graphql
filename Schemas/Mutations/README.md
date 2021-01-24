# Mutation Folder

menampung semua module mutasi
pada grapql mutation fields .Tujuan dari module module yang ada pada folder mutasi adalah menyerhanakan

contoh penerapan

```
    const graphql=require('graphql')
    const {GraphQlString} =graphql
    module.export={
        type:MyType,
        description:'this is my mutation ',
        args:{
            fist_name:
                {
                    type:GraphQLString
                },
             last_name:{
                 type:GraphQlString
             }   
            __dan seterus
        },
        resolve(_parent,args){
            // todo : create new data atau update data berdasakan arqs yang di lakukan
            // query kita berjalan disini
        }
    }
```

asumsikan jika anda menyimpan file dengan nama *CreateUser.js* dan penggunaanya adalah

pada file misalnya *index.js* dimana object type mutation berada

```
    cosnt CreateUser =require('./Mutations/CreateUser')
```

pada file mutations fields ditambahkan module baru
*CreateUser* dan akan seperti pada contoh berikut

```
    fields:{
        moduleA,
        moduleB,
        CreateUser
    }

```

... still live in the silent

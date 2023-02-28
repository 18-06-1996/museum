


var url='https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=2018-10-22&departmentIds=3|9|12'

async function apicalled(){

     v=fetch(url)
     out=await v
     prom= out.json()
     res=await prom
     
    
        for(let i of res.objectIDs){
    
     
          v1=fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`)
             out1=await v1
             prom1= out1.json()
             res1=await prom1
             console.log(res1)
                try{
                      var body=document.querySelector('body')
                      var container=document.createElement('div')
                         body.append(container)
                      var tabel= document.createElement('table')
                         container.append(tabel)
                      var row1=document.createElement('tr')
                         row1.classList.add('name')
                         tabel.append(row1)
                      var row2=document.createElement('tr')
                         row2.classList.add('hero')
                         tabel.append(row2)
                      var pic=document.createElement('img')
                         pic.setAttribute('src',res1.primaryImageSmall)
                         row1.append(`  Object Name is  ${res1.objectName }.`)
                         row2.append(pic)
                   
                
                   }
                catch{
                    //
                   }
                
      }

}
apicalled()


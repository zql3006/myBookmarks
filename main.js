  keys = {
    '0':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length':3
  }
  hash = {'q':'qq.com','w':'weibo.com','e':'ele.me','r':'renren.com','t':'tianya.com','y':'youku.com','u':'uc.com','i':'iqiyi.com','o':'opera.com','p':'panda.tv'
  }
  hashInlocalStorage=JSON.parse(localStorage.getItem('xx')||'null')
  if(hashInlocalStorage) hash=hashInlocalStorage
  index=0
  while(index<keys['length']){
    divXXXXX=document.createElement('div')
    mainXXXXX.appendChild(divXXXXX)
    row=keys[index]
    index2=0
    while(index2<row['length']){
      kbdXXXXX=document.createElement('kbd')
      kbdXXXXX.textContent=row[index2]
      buttonX=document.createElement('button')
      buttonX.textContent='编辑'
      buttonX.id=row[index2]
      buttonX.onclick=function(zz){
        key=zz['target']['id']
        x=prompt('给我一个网址')
        hash[key]=x
        localStorage.setItem('xx',JSON.stringify(hash))
      }
      kbdXXXXX.appendChild(buttonX)
      divXXXXX.appendChild(kbdXXXXX)
      index2=index2+1
    }
    index=index+1
  }
  document.onkeypress=function(zz){
    key=zz['key']
    website=hash[key]
    window.open('http://'+website,'_blank')
  }
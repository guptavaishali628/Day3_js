// datatype-->
// 1-->string:--> primitive data type.
// inbuilt method used in strings:

//(a)-->length()--->return the length of string
function length(){
   let name = "vaishali"
   console.log(name.length)
}
length()

//(b)-->slice() or substring()-->return thr element between the two indexes(starting and end index we have to give) of a string
function slice(){
    let text1 = "This isStringfrom cybrom"
    let text2= "ThisCybromisString"
    console.log(text1.slice(7,13))
    console.log(text2.slice(4,10))

}
slice()

//(c)-->concat()-->combines the text of strings and returns a new string.
function Concat(){
    let str1="vaishali"
    let str2="Gupta"
    console.log(str1.concat(" ",str2))
}
Concat()

//(d)-->trim()-->remove the whitespace from the string
function Trim(){
    let text1 = " welcome to bhopal "
    let result=text1.trim()
    console.log(result)
}
Trim()

//(e)-->replace()-->replace part of a string with another string
function Replace(){
  let name="vaishali gupta and khushi gupta"
  let text="This is string and String of js"
  let result = name.replace("gupta","baniya") // replace only 1st string
  let result1=name.replace(/gupta/g,"baniya") // it means global and change all the string of gupta
  let result2=text.replace(/string/gi,"Cybrom") // it means case insensitive 
  console.log(result) // vaishali baniya and khushi gupta
  console.log(result1) // vaishali baniya and khushi baniya
  console.log(result2) // This is Cybrom and Cybrom of js
}
Replace()

//(f)-->toUpperCase()-->convert capital letter 
function uppercase(){
    let string1="vaishali"
    let result=string1.toUpperCase()
    console.log(result)
}
uppercase()

//(g)-->toLowerCase()-->to convert small letter
function lowercase(){
    let string1="VAISHALI"
    let result=string1.toLowerCase()
    console.log(result)
}
lowercase()

//------------some special methods used in string js----------------
                                                                                             

//(a)->replaceAll() -  replace all occurance of substring or pattern 
//synatx - string.replaceAll(search,replace) 
//return -  new string with replacements 
//case-senstive - yes

function Replaceall(){
    let string1="vaishali gupta"
    let result = string1.replaceAll(string1,"khushi")
    console.log(result)
}
Replaceall()

//(b)-->charAt() -  return character at a specific index
//synatx - string.charAt(index) 
//return -  A single character 
//case-senstive - N/A

function Charat(){
    let name = "vaishali"
    let result = name.charAt(0)
    console.log(result)
}
Charat()

//(c)->charCodeAt() -  returns unicode value of character at specific index
//synatx - string.charCodeAt(index) 
//return -  unicode number 
//case-senstive - N/A

function unicode(){
    let name = "vaishali"
    let result = name.charCodeAt(0)
    console.log(result) // ans = 118
}
unicode()

//(d)->split() - split a string into array
//synatx - string.split(separator) 
//return -  Array of substring 
//case-senstive - N/A

function Split(){
    let name = "vaishali Gupta"
    let result = name.split(" ")
    console.log(result) 
    
    let okk = "w-e are f-rom c-ybr-om"
    console.log(okk.split("-")) // acc to separator
}
Split()

//(e)->indexOf() - find the first occurance of a substring
//synatx - string.indexOf(search,start) 
//return -  index of 1st match or -1 if not found 
//case-senstive - yes
 function Indexof(){
    let name = "vaishali"
    let result = name.indexOf("s",0)
    console.log(result) // 3
 }
 Indexof()







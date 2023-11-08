
const popUpLatency = "1s";
const opacityInfo = "1";
const imgClickColor = "#E0F4FF";

let navTitle = document.getElementById("page-owner");
    let nameArray = new Array();
        nameArray.push("Z")
        nameArray.push("y");
        nameArray.push("r");
        nameArray.push("u");
        nameArray.push("s");
        nameArray.push(" ");
        nameArray.push("H");
        nameArray.push("i");
        nameArray.push("y");
        nameArray.push("a");
        nameArray.push("o");
    
    //unlooped
    let nameColor = new Array();
        nameColor.push("pink");
        nameColor.push("yellow");
        nameColor.push("salmon");
        nameColor.push("aqua");
        nameColor.push("orange");
        nameColor.push("none");
        nameColor.push("pink");
        nameColor.push("yellow");
        nameColor.push("salmon");
        nameColor.push("aqua");
        nameColor.push("orange");
        
        for (let index = 0; index < nameArray.length; index++) {
            let spanElement = document.createElement("span");
            spanElement.id = "name-focus-" + index;
            spanElement.style.fontSize = "30px";
            spanElement.setAttribute("onmouseover", "dynamicTextSize(this)");

            navTitle.append(spanElement);
            spanElement.append(nameArray[index]);
            spanElement.style.letterSpacing = "2px";
            spanElement.style.height = "60px";
            spanElement.style.display = "flex";
            spanElement.style.alignItems = "center";

            let spanHover = document.getElementById(spanElement.id);
            spanHover.addEventListener("mouseover", (event) => {
                event.target.style.color = nameColor[index];
            } , false);
        }

function dynamicTextSize(element){

    let textTarget = document.getElementById(element.id);
  
    switch(element.style.fontSize){
        case "50px": 
            console.log("Small the text");
            element.style.fontSize = "30px";
            break;
        case "30px": 
            console.log("Big the text");
            element.style.fontSize = "50px";
            break;
    
    }   
   
}
    
       
/* Introduction popUP */
// function popUpElement1(element){
//     let cssElement = document.getElementById("popup-1");
//     cssElement.style.opacity = opacityInfo;
//     cssElement.style.right = "0px";
//     return element;
// }

// function popUpElement2(element){
//     let cssElement = document.getElementById("popup-2");
//     cssElement.style.opacity = opacityInfo;
//     cssElement.style.right = "0px";
//     return element;
// }

// function popUpElement3(element){
//     let cssElement = document.getElementById("popup-3");
//     cssElement.style.opacity = opacityInfo;
//     cssElement.style.top = "0px";
//     return element;
// }

// toggle-able element
function clickImg(element){

  
    let target = element.getAttribute("id");
    let targetStyle = document.getElementById(target);
    targetStyle.style.backgroundColor = imgClickColor;
 
        
    /* SpringBoot Img */
        if(target == "springboot_img"){
            
            let imagesToDisableArr = new Array();
                imagesToDisableArr.push("js_img");
                imagesToDisableArr.push("java_img");
            //disabling other image to prevent from using multiple boxes to avoid conflict with hidden boxes with different informations
            disableImage(imagesToDisableArr);

            let targetId = document.getElementById("springboot_info");
                    //Condition #1: when image has been clicked: Checks if hidden div does exist. if so, proceed.
                    if(Boolean(targetId) == true){

                        /* Condition #2: if the div has attributes hidden then remove the hidden attribute */ 
                        if(targetId.hasAttribute("hidden")){
                            targetId.removeAttribute("hidden");

                            /* if the div does not have hidden attribute create a list element */
                            if(targetId.hasAttribute("hidden") == false){
                                const hiddenContent = document.createElement("ul");
                                hiddenContent.id = "hidden-list";
                                    
                                const skillArr = new Array();
                                    skillArr.push("Spring Security");
                                    skillArr.push("Java Server Page");
                                    skillArr.push("Spring Data JPA");
                                    skillArr.push("Spring ORM");
                                    skillArr.push("Java Bcrypt");
                                    skillArr.push("Spring MVC");
                                    skillArr.push("Rest Controller");
                                    skillArr.push("Spring CRUD Full Stack");

                                    for (let index = 0; index <= skillArr.length-1; index++) {
                                        skillArr.sort();
                                        let li = document.createElement("li");
                                        li.innerText = skillArr[index];
                                        hiddenContent.appendChild(li); 
                                    }

                                /* if a list already on DOM then do nothing , else put the paragraph on the DOM */
                                let listChecker = document.getElementById(hiddenContent.id);
                                    if(Boolean(listChecker) == true){
                                        // list already exist
                                    }else{
                                        // paragraph added
                                        targetId.appendChild(hiddenContent);
                                    } 
                            }
                            //Condition #3:when image has been clicked: if hidden div does exist and no hidden attribute then set attribute back to hidden to go back to the condition #2
                        }else{
                            let existingList =  document.getElementById("hidden-list");
                                if(Boolean(existingList) == true){
                                    for (let index = 0; index <= existingList.length-1; index++) {
                                        const element = array[index];
                                        existingList.removeChild(element);
                                    }
                                    existingList.remove();
                                }
                                targetId.setAttribute("hidden" , "");

                                //enable back the images to be clickable again
                                let imagesToEnableArr = new Array();
                                    imagesToEnableArr.push("js_img");
                                    imagesToEnableArr.push("java_img");
                                enableImage(imagesToEnableArr);

                                targetStyle.style.backgroundColor = "transparent";
                            
                        }
                    }
        } //end of condition [spring boot]
    
     /* Java Img */
        if(target == "java_img"){

            let imagesToDisableArr = new Array();
            imagesToDisableArr.push("js_img");
            imagesToDisableArr.push("springboot_img");

            //disabling other image to prevent from using multiple boxes to avoid conflict with hidden boxes with different informations
            disableImage(imagesToDisableArr);

            let targetId = document.getElementById("java_info");
              
            if(Boolean(targetId) == true){
                if(targetId.hasAttribute("hidden")){
                    targetId.removeAttribute("hidden");
                                
                        if(targetId.hasAttribute("hidden") == false){
                            const hiddenContent = document.createElement("ul");
                            hiddenContent.id = "hidden-list";
                                    
                            const skillArr = new Array();
                                skillArr.push("Java POJO");
                                skillArr.push("Java Bean");
                                skillArr.push("Array");
                                skillArr.push("Objects");
                                skillArr.push("Java 8");
                          

                                for (let index = 0; index <= skillArr.length-1; index++) {
                                    skillArr.sort();
                                    let li = document.createElement("li");
                                    li.innerText = skillArr[index];
                                    hiddenContent.appendChild(li); 
                                }

                                    /* if a list already on DOM then do nothing , else put the paragraph on the DOM */
                                let listChecker = document.getElementById(hiddenContent.id);
                                    if(Boolean(listChecker) == true){
                                        // list already exist
                                    }else{
                                        // paragraph added
                                        targetId.appendChild(hiddenContent);
                                    } 
                            }
                //Condition #3:when image has been clicked: if hidden div does exist then set attribute back to hidden to go back to the condition #2
                }else{
                    let existingList =  document.getElementById("hidden-list");
                        if(Boolean(existingList) == true){
                            for (let index = 0; index <= existingList.length-1; index++) {
                                const element = array[index];
                                existingList.removeChild(element);
                            }
                            existingList.remove();
                        }
                        targetId.setAttribute("hidden" , "");
                        
                        //enable back the images to be clickable again
                        let imagesToEnableArr = new Array();
                        imagesToEnableArr.push("js_img");
                        imagesToEnableArr.push("springboot_img");

                        enableImage(imagesToEnableArr);
                        targetStyle.style.backgroundColor = "transparent";
                }
        }
    } //end of condition [java]

    /* JS Img */
        if(target == "js_img"){

            let imagesToDisableArr = new Array();
            imagesToDisableArr.push("java_img");
            imagesToDisableArr.push("springboot_img");

            //disabling other image to prevent from using multiple boxes to avoid conflict with hidden boxes with different informations
            disableImage(imagesToDisableArr);

            let targetId = document.getElementById("js_info");
            
            if(Boolean(targetId) == true){
                if(targetId.hasAttribute("hidden")){
                    targetId.removeAttribute("hidden");
                                
                        if(targetId.hasAttribute("hidden") == false){
                            const hiddenContent = document.createElement("ul");
                            hiddenContent.id = "hidden-list";
                                    
                            const skillArr = new Array();
                                skillArr.push("Vannila.JS");
                                skillArr.push("DOM manipulation");
                                skillArr.push("JS ES6");
                               
                        

                                for (let index = 0; index <= skillArr.length-1; index++) {
                                    skillArr.sort();
                                    let li = document.createElement("li");
                                    li.innerText = skillArr[index];
                                    hiddenContent.appendChild(li); 
                                }

                                    /* if a list already on DOM then do nothing , else put the paragraph on the DOM */
                                let listChecker = document.getElementById(hiddenContent.id);
                                    if(Boolean(listChecker) == true){
                                        // list already exist
                                    }else{
                                        // paragraph added
                                        targetId.appendChild(hiddenContent);
                                    } 
                            }
                //Condition #3:when image has been clicked: if hidden div does exist then set attribute back to hidden to go back to the condition #2
                }else{
                    let existingList =  document.getElementById("hidden-list");
                        if(Boolean(existingList) == true){
                            for (let index = 0; index <= existingList.length-1; index++) {
                                const element = array[index];
                                existingList.removeChild(element);
                            }
                            existingList.remove();
                        }
                        targetId.setAttribute("hidden" , "");
                        
                        //enable back the images to be clickable again
                        let imagesToEnableArr = new Array();
                        imagesToEnableArr.push("java_img");
                        imagesToEnableArr.push("springboot_img");

                        enableImage(imagesToEnableArr);
                        targetStyle.style.backgroundColor = "transparent";
                }
        }
    } //end of condition [JS]

} // end function clickIimg()

function hoverImg(element) {
    let targetStyle = document.getElementById(element.id);
    targetStyle.style.cursor = "pointer";
}

//disable image to remove onclick-hidden div
function disableImage(imagesToDisableArr){
    for (let index = 0; index <= imagesToDisableArr.length-1; index++) {
        let targetImage = imagesToDisableArr[index];
        document.getElementById(targetImage).removeAttribute("onClick");   
    }   
}

//enable image to add onclick-hidden div
function enableImage(imagesToEnableArr){
    for (let index = 0; index <= imagesToEnableArr.length-1; index++) {
        let targetImage = imagesToEnableArr[index];
        document.getElementById(targetImage).setAttribute("onClick" , "clickImg(this)");
    }   
}   

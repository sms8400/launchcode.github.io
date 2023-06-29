
var LC_GitHUB = {
    'base' : "https://github.com/icr8FreeCode/replits/tree/"
}; 
var data = [
    "Array-Studio-02",
    "ArrayExercises01 ",
    "ArrayExercises02 ",
    "ArrayExercises03 ",
    "ArrayExercises04 ",
    "ArrayExercises05 ",
    "ArrayExercises06 ",
    "BaseCaseCC01 ",
    "BaseCaseCC02 ",
    "CSSExercises ",
    "ClassExercises01 ",
    "ClassStudio01 ",
    "ConditionalsExercises01 ",
    "ConditionalsExercises02 ",
    "ConditionalsExercises03 ",
    "DNA-strings",
    "Debug1stSyntaxError ",
    "DebugLogicErrors1 ",
    "DebugLogicErrors2 ",
    "DebugLogicErrors3 ",
    "DebugLogicErrors4 ",
    "DebugLogicErrors5 ",
    "DebugRuntimeErrors1 ",
    "DebugRuntimeErrors2 ",
    "DebugSyntaxErrors2 ",
    "ExceptionsExercises01 ",
    "Exercises-DOM-and-Events", 
    "Exercises-Data-and-Variables",
    "Exercises-rocket-simulation",
    "ForLoopExercises ",
    "FunctionsExercises01 ",
    "FunctionsExercises02 ",
    "FunctionsExercises03-05",
    "Hello-Jasmine-Starter-Code", 
    "HelloJasmine ",
    "HelloWorldJS ",
    "Intro-To-Method-Chaining", 
    "Mars-Rover-Autograded",
    "ModuleExercises01 ",
    "MoreFuncsStudio01 ",
    "MoreFuncsStudio02 ",
    "MoreFuncsStudio03 ",
    "MoreFunctionsExercises01 ",
    "MoreFunctionsExercises02 ",
    "ObjectsExercises ",
    "ObjectsStudio01 ",
    "ObjectsStudio02 ",
    "ObjectsStudio03 ",
    "RandomNumberPractice ",
    "RecursionCC01 ",
    "RecursionExample01 ",
    "Reverse-Function-with-Tests-Expectations", 
    "Reversing-a-string",
    "ShadowingExample ",
    "StringExercises02 ",
    "StringExercises03 ",
    "StringExercises05 ",
    "StringExercises06 ",
    "StringandArrayStudio01 ",
    "StringandArrayStudio03 ",
    "Studio-Data-and-Variables", 
    "Syntax-Highlighting",
    "TDDStarterExpectations ",
    "Try-It-Event-Bubbling", 
    "Try-It-addEventListener", 
    "UnitTestingStudio ",
    "Validator-check", 
    "WhileLoopExercises ",
    "Basic-inputs-example", 
    "Checkbox-inputs-example", 
    "ForinLoop ",
    "Form-default", 
    "Form-validation", 
    "IsPalindromeStarter ",
    "Ioopsstudio ",
    "Npm-with-replit-starter", 
    "Radio-inputs-example", 
    "Select-inputs-example", 
    "Specialized-inputs-example", 
    "Wrapper-demo"
    ]; 
     

    function updateHTML(d){
           
        // create unodered list elemnt & link 
        var li = document.createElement("li");        
        var anchor = document.createElement("a");~
        
        // create the attributes for the link and add the content 
        anchor.setAttribute('href', LC_GitHUB.base + d);
        anchor.setAttribute("class", "text")
        anchor.textContent = d;

        // add the list item and and link to the UI
        li.append(anchor);
        _repo.append(li)
    }; 

    
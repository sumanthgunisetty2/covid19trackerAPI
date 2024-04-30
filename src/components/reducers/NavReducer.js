const initState = "Login"
export default function NavReducer(state=initState, action){
    switch(action.type) {
        case "Homepage":
            return "Homepage";
        case "Login":
            return "Login";
        case "Registration":
            return "Registration"; 
        case "Profile":
            return "Profile";
        case "Cases":
            return "Cases";
        case "Covid":
            return "Covid";
        default:
            return "Homepage";
    }
}
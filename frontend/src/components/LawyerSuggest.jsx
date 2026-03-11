export default function LawyerSuggest({category}){

const lawyers = {

Cyber:"Cyber Crime Lawyer",
Family:"Family Lawyer",
Property:"Property Lawyer"

};

return(

<div>

Recommended Lawyer:

<strong>{lawyers[category]}</strong>

</div>

)

}
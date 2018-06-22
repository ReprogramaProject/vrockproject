// import React from 'react'
// import Twit from 'twit'


// function Twitter (props) {
//     const Twit = require('twit')

//     const T = new Twit({
//       consumer_key: '<J1m5baxUnjpJKRxnGkif054zJcFXqUgFbeYzjf5ETpMmSCpJeK>',
//       consumer_secret: '<J1m5baxUnjpJKRxnGkif054zJcFXqUgFbeYzjf5ETpMmSCpJeK>',
//       access_token: '<J1m5baxUnjpJKRxnGkif054zJcFXqUgFbeYzjf5ETpMmSCpJeK>',
//       access_token_secret: '<J1m5baxUnjpJKRxnGkif054zJcFXqUgFbeYzjf5ETpMmSCpJeK>'
   
  
//     })
    
//     module = {exports: {} }  => {
//       console.log('Getting Twitter posts.')
//       return T.get(
//         '/search/tweets.json',
//         { q: 'kanye' , result_type: 'popular' }
//       )
//       .catch(err => console.log("Error getting latest tweets." + "oiiii", err))
//       .then(
//         res => {
//             console.log (res)
//         //   if (!res.data.errors) {
//         //     // SUCESSO
//         //     console.log('Twitter:' + data.length)
//         //     return data
//         //   } else {
//         //     console.log("Error getting latest tweets.", err)    
//         //   }
//         },
//         err => console.log("Error getting latest tweets.", err)
//       )
//     }  

//     return (
//         <div className="twitter">

//         <h1> Oi </h1>     
                        

//     </div>
//     )
// }

// export default Twitter
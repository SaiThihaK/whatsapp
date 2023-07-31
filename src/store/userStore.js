import { defineStore } from "pinia";
import axios from 'axios'
import { doc,setDoc,getDoc,collection  } from "firebase/firestore";
import {db} from "@/firebase-init";
export const useUserStore = defineStore('user', {
  state: () => ({
    sub: '',
    email: '',
    picture: '',
    firstName: '',
    lastName: '',
      allUsers:[],

  }),
  actions:{
    async getUserDetailsFromGoogle(data){
        try{
         let res = await axios.post('http://localhost:4000/api/google-login', {
              token: data.credential
          })
          console.log(res.data);
            let userExist =await this.checkIfUserExist(res.data.sub);
            if(!userExist)await this.saveUserDetails(res);
          this.sub = res.data.sub;
          this.email = res.data.email;
          this.firstName = res.data.given_name;
          this.lastName = res.data.family_name;
          this.picture = res.data.picture;
          let user = JSON.stringify({
              sub:res.data.sub,
              email:res.data.email,
              picture:res.data.picture,
              firstName:res.data.firstName,
              lastName:res.data.lastName
          });
          localStorage.setItem("user",user);

        }catch(err){
            console.log(err);
        }
    },
    async checkIfUserExist(id){
      const docRef = doc(db,'users',id);
      const docSnap = await getDoc(docRef);
      return docSnap.exists(); 
    },
  async saveUserDetails(res){
    try{
  await setDoc(doc(db,"users",res.data.sub),{
    sub:res.data.sub,
    email:res.data.email,
    picture:res.data.picture,
    firstName:res.data.given_name,
    lastName:res.data.family_name  
  });
    }catch(err){
    console.log(err);
    }
  },
      async getAllUser(){
        const querySnapShot =await  getDoc(collection(db,"users"));
        console.log(querySnapShot);
        let users = [];
        // querySnapShot.forEach(res=>users.push({res.data()}))
        // if(users.length){
        //     this.allUsers = [];
        //     users.forEach(res=>this.allUsers.push({res}));
        // }


      },
  logout(){
    this.sub = '';
    this.email = '';
    this.picture = '';
    this.firstName = '';
    this.lastName = '';
  }
  }
});
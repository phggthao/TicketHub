import { Schema, model } from "mongoose";

export interface User{
    id:string;
    name:string;
    email:string;
    password:string;
    phone:string;
    dob:string;
    isOrganizer:boolean;
}

export const UserSchema = new Schema<User>({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    phone: {type:String, required:true},
    dob: {type:String, required:true},
    isOrganizer: {type:Boolean, required:true},
}, {
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const UserModel = model<User>('user', UserSchema);
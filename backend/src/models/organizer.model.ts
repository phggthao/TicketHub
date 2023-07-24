import { Schema, Types, model } from "mongoose";

export interface Organizer {
    id: string;
    user: Types.ObjectId;
    name: string;
    email: string;
    phone: string;
    city: string;
    district: string;
    ward: string;
    address: string;
}

export const OrganizerSchema = new Schema<Organizer>({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    phone: {type:String, required:true},
    city: {type:String, required:true},
    district: {type:String, required:true},
    ward: {type:String, required:true},
    address: {type:String, required:true},
    user: {type: Schema.Types.ObjectId, required:true}
},{
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const OrganizerModel = model('organizer', OrganizerSchema);
const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reqiured: [true, "Please add a name"],
      nuique: true,
      trim: true,
      maxlength: [50, "Name can not be nore than 50 characters"],
    },
    address: {
      type: String,
      reqiured: [true, "Please add an address"],
    },
    district: {
      type: String,
      reqiured: [true, "Please add a district"],
    },
    province: {
      type: String,
      reqiured: [true, "Please add an province"],
    },
    postalcode: {
      type: String,
      reqiured: [true, "Please add a postalcode"],
      maxlength: [5, "Postalcode can not be more than 5 digits"],
    },
    tel: {
      type: String,
    },
    region: {
      type: String,
      reqiured: [true, "Please add a region"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

//Reverse populate with virtuals
HospitalSchema.virtual(`appointments`, {
  ref: `Appointment`,
  localField: `_id`,
  foreignField: `hospital`,
  justOne: false,
});
//Casade delete appointment
HospitalSchema.pre(
  `deleteOne`,
  { document: true, query: false },
  async function (next) {
    console.log(`Appointments being removed from hospital ${this._id}`);
    await this.model(`Appointment`).deleteMany({ hospital: this._id });
    next();
  }
);

module.exports = mongoose.model("Hospital", HospitalSchema);

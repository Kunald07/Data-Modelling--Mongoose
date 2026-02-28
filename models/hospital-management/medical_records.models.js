import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    historyDecease: {
      type: String,
      required: true,
    },
    checkupAt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema,
);

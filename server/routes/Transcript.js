/** @format */

const router = require("express").Router();
const transcript = require("../model/transcriptmodel");

router.post("/transcript", async (req, res) => {
  try {
    const newTranscript = new transcript({
      transcript: req.body.transcript,
    });
    const trans = await newTranscript.save();
    //save user return response
   
    res.status(201).json(trans);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;

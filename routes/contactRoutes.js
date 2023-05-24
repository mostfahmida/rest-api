const express = require("express");
const router = express.Router();
const {getContact, addContact, updateContact, deleteContact} = require('../controlles/contactControlles')


router.get("/", getContact)
router.post("/post", addContact)
router.put("/put/:id", updateContact)
router.delete("/delete/:id", deleteContact)




module.exports = router;

const mongoose = require('mongoose');
var FirstSemSearchModel = {
    "Column1":String,
    "Column2":String,
    "Column3":String,
    "B":Object,
    "Column5":String,
    "Column6":String
}
var FirstSemSceema = mongoose.Schema(FirstSemSearchModel);
var FirstSemModel = mongoose.model('1st Semsester', FirstSemSceema);

var SecondSemSearchModel = {
    "Column1":String,
    "Column2":String,
    "Column3":String,
    "B":Object,
    "Column5":String,
    "Column6":String
}
var SecondSemSceema = mongoose.Schema(SecondSemSearchModel);
var SecondSemModel = mongoose.model('2nd Semsester', SecondSemSceema)

var ThirdSemSearchModel = {
    "Column1":String,
    "Column2":String,
    "Column3":String,
    "B":Object,
    "Column5":String,
    "Column6":String
}
var ThirdSemSceema = mongoose.Schema(ThirdSemSearchModel);
var ThirdSemModel = mongoose.model('3rd Semsester', ThirdSemSceema)

var FourthSemSearchModel = {
    "Column1":String,
    "Column2":String,
    "Column3":String,
    "B":Object,
    "Column5":String,
    "Column6":String
}
var FourthSemSceema = mongoose.Schema(FourthSemSearchModel);
var FourthSemModel = mongoose.model('4th Semsester', FourthSemSceema)

var FifthSemSearchModel = {
    "Column1":String,
    "Column2":String,
    "Column3":String,
    "B":Object,
    "Column5":String,
    "Column6":String
}
var FifthSemSceema = mongoose.Schema(FifthSemSearchModel);
var FifthSemModel = mongoose.model('5th Semsester', FifthSemSceema)

var SixthSemSearchModel = {
    "Column1":String,
    "Column2":String,
    "Column3":String,
    "B":Object,
    "Column5":String,
    "Column6":String
}
var SixthSemSceema = mongoose.Schema(SixthSemSearchModel);
var SixthSemModel = mongoose.model('6th Semsester', SixthSemSceema)

// Exporting the model
module.exports = {FirstSemModel, SecondSemModel, ThirdSemModel, FourthSemModel, FifthSemModel, SixthSemModel}
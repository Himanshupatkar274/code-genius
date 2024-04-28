const questionModel = require('../models/question');

exports.getAllHmlQuestions = (req, res) => {
  const allQuestions = questionModel.getAllHtmlQuestions();
  res.json(allQuestions);
};


exports.getAllAngularQuestions = (req, res) => {
  const allQuestions = questionModel.getAllAngularQuestions();
  res.json(allQuestions);
};
exports.getAllCssQuestions = (req, res) => {
  const allQuestions = questionModel.getAllCssQuestions();
  res.json(allQuestions);
};
exports.getAllJsQuestions = (req, res) => {
  const allQuestions = questionModel.getAllJsQuestions();
  res.json(allQuestions);
};
exports.getAllNodeQuestions = (req, res) => {
  const allQuestions = questionModel.getAllNodeQuestions();
  res.json(allQuestions);
};
exports.trackCertificate = (req, res) => {
 
};
// exports.getUserById = (req, res, next) => {
//     console.log(htmlInterviewQuestion)

// };
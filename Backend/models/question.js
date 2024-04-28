// models/questionModel.js
const fs = require('fs');
const path = require('path');

const getAllHtmlQuestions = () => {
  try {
    // Read the content of the JSON file synchronously
    const questionsJson = fs.readFileSync('./Backend/html-question.json', 'utf-8');
    // Parse the JSON content
    const questions = JSON.parse(questionsJson);
    return questions;
  } catch (error) {
    console.error('Error reading questions file:', error.message);
    return [];
  }
};
const getAllAngularQuestions = () =>{
  try {
    // Read the content of the JSON file synchronously
    const questionsJson = fs.readFileSync('./Backend/angular-question.json', 'utf-8');
    // Parse the JSON content
    const questions = JSON.parse(questionsJson);
    return questions;
  } catch (error) {
    console.error('Error reading questions file:', error.message);
    return [];
  }
}
const getAllCssQuestions = () =>{
  try {
    // Read the content of the JSON file synchronously
    const questionsJson = fs.readFileSync('./Backend/css-question.json', 'utf-8');
    // Parse the JSON content
    const questions = JSON.parse(questionsJson);
    return questions;
  } catch (error) {
    console.error('Error reading questions file:', error.message);
    return [];
  }
}
const getAllJsQuestions = () =>{
  try {
    // Read the content of the JSON file synchronously
    const questionsJson = fs.readFileSync('./Backend/javascript-question.json', 'utf-8');
    // Parse the JSON content
    const questions = JSON.parse(questionsJson);
    return questions;
  } catch (error) {
    console.error('Error reading questions file:', error.message);
    return [];
  }
}
const getAllNodeQuestions = () =>{
  try {
    // Read the content of the JSON file synchronously
    const questionsJson = fs.readFileSync('./Backend/node-question.json', 'utf-8');
    // Parse the JSON content
    const questions = JSON.parse(questionsJson);
    return questions;
  } catch (error) {
    console.error('Error reading questions file:', error.message);
    return [];
  }
}
module.exports = {
  getAllHtmlQuestions,getAllAngularQuestions,getAllCssQuestions,getAllJsQuestions,getAllNodeQuestions
};


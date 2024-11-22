from flask import Blueprint, render_template, jsonify, request

main = Blueprint('main', __name__)

flashcards = [
    {"front": "Hello", "back": "keluhohohu"},
    {"front": "Thank you", "back": "jukailaheha nuhuna"},
    {"front": "Goodbye", "back": "kohuhulelonulu"}
]

quiz_data = [
    {
        "question": "What is the translation of 'ありがとう'?",
        "options": ["Thank you", "Hello", "Goodbye", "Please"],
        "answer": "Thank you"
    },
    {
        "question": "What does 'さようなら' mean?",
        "options": ["Hello", "Goodbye", "See you later", "Excuse me"],
        "answer": "Goodbye"
    },
    {
        "question": "Translate 'こんにちは' into English.",
        "options": ["Good morning", "Good afternoon", "Hello", "Thank you"],
        "answer": "Hello"
    }
]

@main.route('/')
def home():
    return render_template('index.html')

@main.route('/flashcards')
def get_flashcards():
    return jsonify(flashcards)

@main.route('/quiz')
def quiz():
    return render_template('quiz.html')

@main.route('/get_quiz')
def get_quiz():
    return jsonify(quiz_data)
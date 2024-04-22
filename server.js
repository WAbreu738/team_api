const express = require('express')
const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'pass',
    database: 'student_course_db'
})
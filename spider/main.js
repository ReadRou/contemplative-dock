const {
    queue
} = require('./spider')

queue('http://www.studyai.com/news/lazy/?page=1&limit=394&xtime=today', 'today')
queue('http://www.studyai.com/news/lazy/?page=1&limit=10&xtime=week', 'week')
queue('http://www.studyai.com/news/lazy/?page=1&limit=2000&xtime=month', 'month')
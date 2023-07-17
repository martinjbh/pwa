
console.log('worker.js')

self.addEventListener('push', e => {
    console.log('notification recived');
    const data = e.data.json()
    // console.log(data)
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAJFBMVEUAeoQAe4UCeINAo6IeiZVFlaFEmKIrj5s1k549laBOiaJJlaIeTI+uAAAACnRSTlMCChP+NcvjV4OsjIuI+wAAAShJREFUOI2Vk9tuxCAMRIMZ3+D//7cGA9mtkkodaR+yc2KPDbmuf6v86ZUyfm/Q9JcemG28IOkQVBX0QMzOZCxDrPRAlALurU9Vzio3MZ5Ull97rQJK5K4PXq8nwd9ExLPWdodJGG0i80Na6PZnE0pgSltjk97ZfKVQmsRKODo4hWcUYevQ6BFEDmgeHRjWu1JMmz3cRpfhK7cpVREoPIFQbCyASyX9bmCHq3Y380kIYgTythQhDGLqGkeSNZyuC9vvrIZ4HQYXSaDiKgeIEIicDIBrPcCpEHu0MUIsQOUD+KgQ1SFjFVa/AL5LOMemxWXPOULOLR/iPoscU3NR8uXfgGhukuD8pLPqEodGb1qH+ap9H+iRWXduE7+Y+de6lOVd53t+dsP5AQNjDvk9IltVAAAAAElFTkSuQmCC'
    });

})


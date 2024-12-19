import React from 'react'
import style from './Quotes.module.css'
const data = [
    {
        "author": "Albert Einstein",
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving forward, no matter how tough the climb or how long the journey. Progress demands resilience, determination, and faith in your path."
    },
    {
        "author": "Mahatma Gandhi",
        "quote": "The best way to find yourself is to lose yourself in the service of others. True happiness and purpose are achieved when we put others' needs above our own and work toward a better, shared future."
    },
    {
        "author": "Martin Luther King Jr.",
        "quote": "Faith is taking the first step, even when you don't see the whole staircase. Life’s challenges require bravery, hope, and the belief that progress is made one step at a time, no matter the uncertainty."
    },
    {
        "author": "Steve Jobs",
        "quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. Keep pushing boundaries and chasing excellence in everything you do."
    },
    {
        "author": "Helen Keller",
        "quote": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. Success is born from a mindset that embraces possibilities and overcomes challenges with determination and courage."
    },
    {
        "author": "Walt Disney",
        "quote": "All our dreams can come true if we have the courage to pursue them. The magic lies not in wishing, but in taking bold, unwavering steps toward making those dreams a reality, no matter the obstacles."
    },
    {
        "author": "Ralph Waldo Emerson",
        "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. True strength, resilience, and greatness are found in our hearts and minds, ready to be unleashed."
    },
    {
        "author": "Nelson Mandela",
        "quote": "I have walked that long road to freedom. I have tried not to falter; I have made missteps along the way. But I have discovered that courage is not the absence of fear but the triumph over it."
    },
    {
        "author": "Confucius",
        "quote": "It does not matter how slowly you go, as long as you do not stop. Progress is steady and purposeful, and every small effort contributes to the greater success that lies ahead. Perseverance is the key."
    },
    {
        "author": "Benjamin Franklin",
        "quote": "An investment in knowledge pays the best interest. Education, learning, and wisdom build the foundation for a prosperous life. Commit yourself to growth, for it yields returns far greater than any other venture."
    },
    {
        "author": "Aristotle",
        "quote": "Happiness depends upon ourselves. It is about cultivating a virtuous life and focusing on the things within our control. A life of purpose, reason, and balance leads to true fulfillment and joy."
    },
    {
        "author": "Dalai Lama",
        "quote": "Happiness is not something ready-made. It comes from your own actions. Acts of kindness, compassion, and mindfulness bring inner peace and contentment, creating a ripple effect that positively influences the world around you."
    },
    {
        "author": "Oscar Wilde",
        "quote": "Be yourself; everyone else is already taken. Embracing your unique qualities and expressing your individuality not only sets you apart but also allows you to live authentically and confidently in a world of imitation."
    },
    {
        "author": "Mark Twain",
        "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. Sail away from the safe harbor and explore the unknown with courage."
    },
    {
        "author": "Eleanor Roosevelt",
        "quote": "The future belongs to those who believe in the beauty of their dreams. Dreams are the seeds of possibilities. Nurture them, believe in them, and let them guide you to achieve greatness in life."
    },
    {
        "author": "Buddha",
        "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. Living fully in the present enables clarity, peace, and the ability to make impactful decisions."
    },
    {
        "author": "J.K. Rowling",
        "quote": "It is our choices, Harry, that show what we truly are, far more than our abilities. The decisions we make, big or small, define our character and pave the way for our future achievements."
    },
    {
        "author": "Maya Angelou",
        "quote": "You may not control all the events that happen to you, but you can decide not to be reduced by them. Strength lies in how you respond to life’s challenges and rise above adversity."
    },
    {
        "author": "Leonardo da Vinci",
        "quote": "Learning never exhausts the mind. The more we explore, discover, and understand, the more we enrich our lives. Curiosity and knowledge are the keys to unlocking endless possibilities and personal growth in all endeavors."
    },
    {
        "author": "C.S. Lewis",
        "quote": "You are never too old to set another goal or to dream a new dream. Every moment is a fresh opportunity to pursue your aspirations and rewrite your story with hope, passion, and resilience."
    },
    {
        "author": "Rumi",
        "quote": "The wound is the place where the light enters you. Hardships and struggles teach valuable lessons and open doors to growth, wisdom, and the beauty of becoming stronger and wiser through challenges."
    },
    {
        "author": "Vincent Van Gogh",
        "quote": "What would life be if we had no courage to attempt anything? Great achievements come from stepping out of our comfort zones, daring to dream big, and putting in the work to make them real."
    },
    {
        "author": "Sun Tzu",
        "quote": "The greatest victory is that which requires no battle. Wisdom, strategy, and understanding others’ motivations often lead to success without conflict, highlighting the power of knowledge and thoughtful planning over brute force."
    },
    {
        "author": "Thomas Edison",
        "quote": "I have not failed. I've just found 10,000 ways that won't work. Persistence, creativity, and resilience are the true ingredients of innovation and eventual success, no matter how many obstacles you face."
    },
    {
        "author": "Victor Hugo",
        "quote": "Even the darkest night will end and the sun will rise. No matter how challenging life becomes, there is always hope and the promise of a brighter, better tomorrow. Persevere with courage and faith."
    },
    {
        "author": "Henry Ford",
        "quote": "Whether you think you can, or you think you can’t – you’re right. Your mindset shapes your reality. Positive thinking and self-belief are the starting points for accomplishing extraordinary things in life."
    },
    {
        "author": "Jane Austen",
        "quote": "There is no charm equal to tenderness of heart. Kindness, empathy, and a compassionate spirit create meaningful connections with others, enriching both the giver’s and receiver’s lives in immeasurable ways."
    },
    {
        "author": "Charles Dickens",
        "quote": "No one is useless in this world who lightens the burdens of another. By offering support, love, and assistance, we create a ripple effect of positivity and make the world a kinder place."
    },
    {
        "author": "Friedrich Nietzsche",
        "quote": "He who has a why to live can bear almost any how. A clear sense of purpose empowers individuals to endure challenges, adapt to change, and find meaning in every aspect of life."
    },
    {
        "author": "Barack Obama",
        "quote": "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."
    }
]


const Quotes = () => {
    return (
        <div className={style.container}>
            {
                data.map((ele, idx) => {
                    return (
                        <div key={idx} className={style["quote-card"]}>
                            <p className={style.quote}>
                                <span className={style.first}>Quote: </span>{ele.quote}</p>
                            <h3 className={style.author}>
                                <span className={style.second}>Author: </span>{ele.author}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Quotes
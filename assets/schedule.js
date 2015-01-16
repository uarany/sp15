/* Shortcuts for creating schedule objects
 * Paramters:
 * Reading: (title, link, 'type [required is default]')
 * Lecture: (title, '[video URL]', '[Guest Name]')
 * Lab:     (title, 'topic file path', [boolean -- Reading Quiz?])
 * Disc:    (title, [boolean -- Resources available?])
 * HW:      (title, TBD...)
 * NOTE: These links are currently relative to the home page.
 */
var lab      = cs10.newLabObject,
    reading  = cs10.newReadingsObject,
    lect     = cs10.newLectureObject,
    disc     = cs10.newDiscussionObject,
    hw       = cs10.newHomeworkObject;

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JAN 19 - 23
cs10.week1 = {
    readings: 'No Readings',
    lectM: lect('No Lecture Monday'),
    labA: lab('No Labs Monday, Tuesday, or Wednesday morning'),
    lectW: lect('Welcome and Abstraction', '', 'https://coursesharing.org/courses/6/lectures/7'),
    labB: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_new/1-introduction.topic"),
    disc: disc('Welcome to CS10!'),
    hw: hw('HW0', '1/24', 'quizzes/1869517')
};

// JAN 26 - 30
cs10.week2 = {
    readings: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                'resources/readings/BH-Abstraction.txt'),
        reading('Why Software is Eating the World',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889491'),
        reading('Learning to Code!',
                'http://www.youtube.com/watch?v=dU1xS07N-FA',
                'optional'),
        reading('Is Abstraction the Key to Computing?',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889492',
                'optional'),
        reading('Scratch: Programming for All',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889490',
                'optional')
    ],
    lectM: lect('Functions'),
    labA: lab('Build Your Own Blocks', 'berkeley_bjc/intro_new/2-loops-variables.topic'),
    lectW: lect('Creativity and Abstraction'),
    labB: lab('Conditionals', 'berkeley_bjc/intro_new/3-conditionals.topic', true),
    disc: disc('Anatomy of a Computer and the Power of Binary'),
    hw: hw('HW1', '1/31')
};

// FEB 2 - 6
cs10.week3 = {
    readings: [
        reading('The Story of Alan Turing &amp; His Machine',
                'http://youtu.be/CQhrMmbiaM0'),
        reading('Designing Games with a Purpose (GWAP)',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889493'),
        reading('Justices Split on Violent Games',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53994720'),
        reading('Video Games Lecture',
                'https://coursesharing.org/courses/6/lectures/11'),
        reading('(Slides)',
                '../sp12/lec/03/'),
        reading('More readings on video games',
                '../fa10/readings/videogames/extra/',
                'optional'),
        reading('Kinect\'s Future a Game Controller in Everything',
                'http://www.msnbc.msn.com/id/40077373/ns/technology_and_science-games/',
                'optional')
    ],
    lectM: lect('3D Graphics'),
    labA: lab('Functions', 'berkeley_bjc/intro_new/4-abstraction-testing.topic', true),
    lectW: lect('Programming Paradigms'),
    labB: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic'),
    disc: disc('All about lists'),
    hw: hw('HW2', '2/7')
};

// FEB 9 - 13
cs10.week4 = {
    readings: [
        reading('How Algorithms Shape Our World',
                'http://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world.html'),
        reading('BtB Chapter 1',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter1.pdf'),
        reading('Program or Be Programmed',
                'http://tedxtalks.ted.com/video/Douglas-Rushkoff-at-TEDxNYED'),
        reading('Program or Be Programmed: A Guide',
                'http://dtc-wsuv.org/hashnextchapter/wp-content/uploads/2013/03/Rushkoff-Study-Guide.pdf',
                'optional'),
        reading('Animating a Blockbuster',
                'http://www.wired.com/magazine/2010/05/process_pixar/',
                'optional')
    ],
    lectM: lect('Algorithms', '',
                'https://coursesharing.org/courses/6/lectures/14'),
    labA: lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic', true),
    lectW: lect('Algorithmic Complexity'),
    labB: lab('Algorithmic Complexity', "berkeley_bjc/areas/algorithm-complexity.topic"),
    disc: disc('Algorithmic Complexity and Quest Review'),
    hw: hw('HW2')
};

// FEB 16 - 20
cs10.week5 = {
    exam: {

    },
    readings: 'No Readings',
    lectM: lect('No Lecture (Holiday)'),
    labA: lab('No Labs Monday<br>Quest Help and Review'),
    lectW: lect('Quest In Class'),
    labB: lab('Finch Robots', 'berkeley_bjc/robots/robots.topic'),
    disc: disc('Quest Debrief and HW3 Help'),
    hw: 'Start HW 3'
};
cs10.week5.lectW.classes = 'exam';
cs10.week5.labA.classes = ''; // Remove 'noClass'


// FEB 23 - 24
cs10.week6 = {
    readings: [
        reading('BtB Chapter 2',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf'),
        reading('BtB Chapter 4 Reading Segment 1',
                '../sp12/readings/BtB4-pt1.pdf'),
        reading('BtB Chapter 4 Reading Segment 2',
                '../sp12/readings/BtB4-pt2.pdf'),
        reading('Living in a Digital World',
                'http://cacm.acm.org/magazines/2011/10/131393-living-in-a-digital-world/pdf',
                'optional'),
        reading('BtB Chapter 3',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter3.pdf',
                'optional')
    ],
    lectM: lect('Recursion I'),
    labA: lab('Trees and Fractals using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic', true),
    lectW: lect('Concurrency'),
    labB: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic'),
    disc: disc('<span style="font-size: 150%">R<sup>e<sup>c<sup>u<sup>r<sup>s<sup>i<sup>o<sup>n</sup></sup></sup></sup></sup></sup></sup></sup>'),
    hw: hw('HW3')
};

// MARCH 2 - 6 (Lauren, Dan, Michael out -- mostly)
cs10.week7 = {
    readings: [
        reading('How Moore\'s Law Works',
                'http://computer.howstuffworks.com/moores-law.htm'),
        reading('Free Lunch is Over',
                'http://www.gotw.ca/publications/concurrency-ddj.htm',
                'hard'),
        reading('What is IBM\'s Watson?',
                'http://www.nytimes.com/2010/06/20/magazine/20Computer-t.html'),
        reading('Brian Harvey\'s AI notes',
                'http://inst.eecs.berkeley.edu/~cs10/fa10/lec/21/ai.txt'),
        reading('The First Church of Robotics',
                'http://www.nytimes.com/2010/08/09/opinion/09lanier.html',
                'optional'),
        reading('The Thinking Machine (Video)',
                'http://www.youtube.com/watch?v=4gzpd0irP58',
                'optional'),
        reading('Spending Moore\'s dividend (CACM)',
                'http://doi.acm.org/10.1145/1506409.1506425',
                'optional')
    ],
    lectM: lect('Recursion II'),
    labA: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    lectW: lect('Artificial Intelligence', '', '', 'A Guest'),
    labB: lab('Project Work'),
    disc: disc('Concurrency and Midterm Intro'),
    hw: hw('Start Midterm Project')
};

// MARCH 9 - 13 (Lauren, Dan, Michael partially out)
cs10.week8 = {
    readings: [
        reading('BtB Chapter 5 Reading Segment 1',
                '../sp12/readings/BtB5-pt1.pdf'),
        reading('BtB Chapter 5 Reading Segment 2',
                '../sp12/readings/BtB5-pt2.pdf'),
        reading('BtB Chapter 5 Reading Segment 3',
                '../sp12/readings/BtB5-pt3.pdf'),
        reading('BtB Chapter 6 (27-37)',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf')
    ],
    lectM: lect('Social Implications I'),
    labA: lab('Project Work <br> Lab Review', '', true),
    lectW: lect('Social Implications II', '', '', 'Gerald Friedland'),
    labB: lab('Project Work'),
    disc: disc('Midterm Review'),
    hw: 'Work on midterm Project'
};

// MIDTERM WEEK
// MARCH 16 - 20
cs10.week9 = {
    exam: {

    },
    readings: 'No Readings',
    lectM: lect('Social Implications III', '', '', 'Brian Harvey'),
    labA: lab('Online <span class="snap">snap</span> Midterm'),
    lectW: lect('The Internet'),
    labB: lab('The Internet', 'berkeley_bjc/areas/internet.topic'),
    disc: disc('Midterm Debrief'),
    hw: hw('Midterm Project')
};
cs10.week9.labA.classes = 'exam';


// Spring Break
// MARCH 23 - 27
cs10.week10 = {
    special: 'Spring Break',
    readings: [],
    hw: 'Get Some Rest!'
};

// MARCH 30 - APRIL 3
cs10.week11 = {
    readings: [
        reading('BtB Chapter 7',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter7.pdf'),
        reading('BtB Appendix',
                '../fa13/readings/Btb_Appendix.pdf'),
        reading('BtB Chapter 8',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter8.pdf',
                'optional')
    ],
    lectM: lect('HCI', '', '', 'Eric Paulos'),
    labA: lab('Tic Tac Toe', 'berkeley_bjc/lists/tic-tac-toe.topic', true),
    lectW: lect('The Internet II'),
    labB: lab('Poject Work'),
    disc: disc('The Internet'),
    hw: hw('Impact Writing Assignment')
};

// APRIL 6 - 10
cs10.week12 = {
    readings: [
        reading('Data explosion creates revolution',
                'http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2011/10/19/BU5K1LJ4R3.DTL'),
        reading('Data Mining',
                'http://webdocs.cs.ualberta.ca/~zaiane/courses/cmput690/notes/Chapter1/ch1.pdf'),
        reading('Data Pitfalls',
                'http://searchenginewatch.com/article/2289574/Big-Data-Big-Trouble-How-to-Avoid-5-Data-Analysis-Pitfalls'),
        reading('Computing as Social Science',
                'http://cacm.acm.org/magazines/2009/4/22953-computing-as-social-science/fulltext',
                'optional'),
        reading('Data Visualization',
                'http://datavisualization.ch/',
                'optional'),
        reading('Basic Statistics (Helpful for Project)',
                'http://www.cimt.plymouth.ac.uk/projects/mepres/stats/handlg_data_ch3.pdf',
                'optional')
    ],
    lectM: lect('Lambda and HOFs'),
    labA: lab('Practice with HOFs and Functions as Data', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    lectW: lect('Besides Blocks I'), // THOUGHT: Move this up a weekx
    labB: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic'),
    disc: disc('Data and HOFs'),
    hw: hw('Impact Post Comments')
};

// APRIL 13 - 17
cs10.week13 = {
    readings: [
        reading('The Heartbleed Bug',
                'http://blog.agilebits.com/2014/04/08/imagine-no-ssl-encryption-its-scary-if-you-try/'),
        reading('What Servers Bleed',
                'https://medium.com/p/804cdf4b48c1',
                'hard')
    ],
    lectM: lect('Besides Blocks II'),
    labA: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    lectW: lect('Data'),
    labB: lab('Besides Blocks: Data in Python', 'berkeley_bjc/python/besides-blocks-data.topic'),
    disc: disc('Practical Privacy Implications'),
    hw: [ hw('Data Project'),
          hw('Final Project Proposal') ]
};

// APRIL 20 - 24
cs10.week14 = {
    readings: [
        reading('The Great Robot Race (Video)',
                'https://www.youtube.com/watch?v=uoiJeIb0wBA'),
        reading('Halting Problem Poem',
                'http://introcs.cs.princeton.edu/java/76computability/halting-poem.html',
                'optional')
    ],
    lectM: lect('Future of Computing'),
    labA: lab('Project Work', '', true),
    lectW: lect('Limits of Computing'),
    labB: lab('Project Work'),
    disc: disc('CS @ Cal and Beyond'),
    hw: 'Start on the Final Project'
};

// APRIL 27 - MAY 1
cs10.week15 = {
    exam: {

    },
    readings: [
        reading('Why is Quantum Different?',
                'http://www.scientificamerican.com/article.cfm?id=what-makes-a-quantum-comp'),
        reading('DNA Storage',
                'http://radar.oreilly.com/2012/08/dna-storage.html',
                'hard'),
        reading('Quantum Leap',
                'http://money.cnn.com/2006/07/26/magazines/fortune/futureoftech_quantum.fortune/index.htm',
                'optional'),
        reading('Twenty Top Predictions for life 100 years from now',
                'http://www.bbc.co.uk/news/magazine-16536598',
                'optional'),
        reading('BtB: Conclusion',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter9.pdf',
                'optional')
    ],
    lectM: lect('Saving the World with Computing', '', '', 'Kathy Yelick'),
    labA: lab('Project Work Lab', '', true),
    lectW: lect('Summary and Farewell'),
    labB: 'With-<span class="snap">snap</span> Exam',
    disc: disc('Summary and Farewell'),
    hw: hw('Final Project')
};
cs10.week15.labB.classes = 'exam';


// DEAD WEEK
// MAY 4 - 7
cs10.week16 = {
    special: 'RRR Week -- No Class',
    readings: [],
    hw: hw('Study for the Final')
};

// MAY 11 - 15
cs10.week17 = {
    exam: {

    },
    readings: [],
    labA: lab('Final Exam<br>7 - 10pm'),
    hw: hw(' ')
};
cs10.week17.labA.classes = 'exam';


// Load the Calendar
// Load the calendar:
$(document).ready(function() {
    cs10.renderTableCalendar();
});
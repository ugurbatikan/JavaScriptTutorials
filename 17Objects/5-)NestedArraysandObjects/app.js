//Nested Arrays & Objects

const student = {
    firstName : 'David',
    lastName : 'Jones',
    strengths : ['Music', 'Art'],
    exams : {
        midterm : 76,
        final : 54
    }
    };
    const avgExams  = (student.exams.midterm + student.exams.final)/2;

    const shoppingCard = [
        {
            product : 'Jenga Classic',
            price : 6.88,
            quantity : 1
        },
        {
            product : 'Echo Dot',
            price : 29.99,
            quantity : 3
        },
        {
            product : 'Fire Stick',
            price : 39.99,
            quantity : 2
        }
    ];

    const game  = {

        player1 : {
            username : 'Blue',
            playingAs : 'X'
        },
        player2 : {
            username : 'Red',
            playingAs : 'O'
        },
        board : [
            ['O' , null, 'X'], 
            ['X', 'O', null],
            ['O' , 'X', 'X'],
            ['X', 'O', 'X']
        ]
    };
     
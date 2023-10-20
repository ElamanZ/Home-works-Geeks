class building  {
    constructor(name_building, square_meter, length, height, width) {
        this.name_building = name_building;
        this.square_meter = square_meter;
        this.length = length;
        this.height = height;
        this.width = width;
    }
}

class test extends building {
    constructor(name_building,square_meter, length, height, width, people,  security, camera, floor, wall, teacher, gym, pool, director, address) {
        super(name_building, square_meter, length, height, width);
            this.peple = people;
            this.security = security;
            this.camera = camera;
            this.floor = floor;
            this.wall = wall;
            this.teacher = teacher;
            this.gym = gym;
            this.pool = pool;
            this.director = director;
            this.adress = address;
    }
}

const office = new test(
    'school',
    1300,
    25,
    15,
    30,
    5000,
    'yes',
    'yes',
    5,
    'foamcrete',
    500,
    3,
    3,
    'male',
    'Kievskaya 155/1'
)
console.log(office)

class test2 extends building {
    constructor(name_building,square_meter, length, height, width, animal, garden, swing, floor, wall, garage, playground, maid, rooms, address) {
        super(name_building, square_meter, length, height, width);
        this.animal = animal;
        this.garden = garden;
        this.swing = swing;
        this.floor = floor;
        this.wall = wall;
        this.garage = garage;
        this.playgraund = playground;
        this.maid = maid;
        this.rooms = rooms;
        this.address = address;
    }
}
const home = new test2(
    'home',
    200,
    11,
    6,
    9,
    5,
    'yes',
    4,
    2,
    'brick',
    2,
    'no',
    'no',
    7,
    'Panfilova 155/1',
)
console.log(home)


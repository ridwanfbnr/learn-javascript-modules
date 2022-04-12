const company = "Programmer Zaman Now";

function sum(first, second) {
    return first + second;
}

class Company {
    constructor(name) {
        this.name = name;
    }

    course(course) {
        console.info(`Saya Sedang Belajar ${course}, di ${this.name}`);
    }
}

//  Export Multiple
export { company, sum, Company };
    
//  Alias di Export
//  export { company as perusahaan, sum as total, Company as Perusahaan };
//  Tidak disarankan, di sarankan ketika import saja untuk menggunakan alias
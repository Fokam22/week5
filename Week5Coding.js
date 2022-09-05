/* The class course is for courses that can be taken to complete a Major
The Major class will be defined later */

class Course {
    constructor(title, location) {
        this.title = title;
        this.location = location;
    }

describe() {
    return '${this.title} can be taken ${this.location}.';
    }
}

//Class Major
class Major {
    constructor (name) {
        this.name = name;
        this.Course = [];
    }

    addCourseToMajor(course) {
        if(course instanceof Course) {
        this.course.push(course);
    
        }   else {
            throw new Error ('You can only add an instace of Course. Argument is not a valid course: ${course}');
        }
    
    }

    displayMajorCourses () {
        return '  ${this.name} has  ${this.course.length}  courses.';
    }
}

class Menu {
    constructor() {
        this.major = [];
        this.selectedMajor = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createMajor();
                    break;
                case"2":
                    this.viewMajor();
                    break;
                case "3":
                    this.deleteMajor();
                    break;
                case "4":
                    this.displayMajors();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions()
        }

        alert('Goodbye!');

    }

    showMainMenuOptions() {
        return prompt('' + 
       '0) exit' + '\n' +
       '1) create a new major ' + '\n' +
       '2) view major' + '\n' +
       '3) delete a major' + '\n' +
       '4) display major '+ '\n' 
        )
    }

    showMajorMenuOptions() {
        return prompt(' ' +
       ' 0) back ' + '\n' +
        '1) create course' + '\n' +
        '2) delete course' + '\n' +
        '--------------------');

    }

    displayMajors() {
        let majorString = ' ';
        for (let i = 0; i < this.major.length; i++) {
            majorString += i +') ' + this.major[i].name + '\n';
        }
        alert(majorString);
    }

    createMajor() {
        let name = prompt('Enter name for new major:');
        this.major.push(new Major(name));
    }

    viewMajor() {
        let index = prompt ('Enter the index of the major you wish to view');
        
        if(index > -1 && index < this.major.length) {
            this.selectedMajor = this.major[index];
            let name = 'Major name: ' + this.selectedMajor.name + '\n';

            for(let i = 0; i < this.selectedMajor.length;  i++) {
                name += i + ') ' + this.selectedMajor.course[i].name 
                + ' - ' + this.selectedMajor.course[i].location + '\n';
            }
        }
        let selection = this.showMajorMenuOptions();
        switch(selection) {
            case '1':
                this.createCourse();
                break;
            case '2':
                this.deleteCourse();
      
        }
    }

    createCourse() {
        let title = prompt('Enter title for new course: ');
        let location = prompt('Enter the location for new course: '
        );
        this.selectedMajor.course.push(new Course(title, location));
    }

    deleteCourse() {
        let index = prompt('Enter the index of the course you wish to delete ');
        if(index > -1 && index < this.selectedMajor.course.length) {
            this.selectedMajor.course.splice(index, 1);
        }
    }
}
 let menu = new Menu()
 menu.start();
const fs = require('fs')
// const data_hospital = fs.readFileSync('/Hospital.json'

let hospital = fs.readFileSync('./hospital.json','utf-8') // type nya string
let data_hospital = JSON.parse(hospital);
let employee = fs.readFileSync('./employee.json','utf-8') // type nya string
let data_employee= JSON.parse(employee);
let patient = fs.readFileSync('./patient.json','utf-8') // type nya string
let data_patient= JSON.parse(patient);
// console.log(data_patient[0].record[0]);


// readline
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class Hospital {
  constructor(name, location, employees, patients) {
    this.name = name
    this.employees = employees
    this.patients = patients
    this.location = location
  }
  // total employees
  // total patients
  static startHere(){
    rl.question('Welcome to Mistic Hospital \n--------------------------\nWho are you?\n[1] Patient\n[2] Employee\nPlease choose user: ', (answer) => {
      if (answer == '1') {
        console.log('hi patient');
        // this.loginAsPatient();
      }else if (answer == '2') {
        this.loginAsEmployee();
      }
    });
  }

  static patientList(){
    console.log(`PATIENT LIST`);
    console.log(` ID  |     Name      |`);
    for (let i=0; i<data_patient.length; i++) {
      console.log(`[${data_patient[i].id}]| ${data_patient[i].name}`);
    }
  }

  static showPatient(n){
    var theOne = 0;
    for (let i=0; i<data_patient.length; i++) {
     if (data_patient[i].id == n) {
       theOne = i;
     }
    }
    console.log(`PATIENT`);
    console.log(`ID: ${data_patient[theOne].id}\nNama: ${data_patient[theOne].name}`);
    console.log(`PATIENT'S RECORDS`);
    console.log(`ID |     Name      |`);
    for (let i=0; i<data_patient[theOne].record.length; i++) {
      console.log(`[${data_patient[theOne].record[i].record_id}]| ${data_patient[theOne].record[i].record_name}`);
    }
  }

  static employeeList(){
    console.log(`EMPLOYEE LIST`);
    console.log(`ID |    Name : Position  `);
    for (let i=0; i<data_employee.length; i++) {
      console.log(`${data_employee[i].id}| ${data_employee[i].name} : ${data_employee[i].position}`);
    }
  }

  static addPatient(id,nama,recordId,recordName){
    // console.log('the id record'+recordId);
    // console.log('the record name'+recordName);
    var obj = {}
    obj['id'] = id;
    obj['name'] = nama;
    obj['record'] = [];
    var objRecord = {};
    objRecord['record_id'] = recordId;
    objRecord['record_name'] = recordName;
    obj.record.push(objRecord);
    data_patient.push(obj);
    fs.writeFileSync('patient.json',JSON.stringify(data_patient, null, 2));
  }

  static deletePatient(n){
    let newList = [];
    for (let i=0; i<data_patient.length; i++) {
      if (data_patient[i].id != n) {
        newList.push(data_patient[i]);
      }
    }
    fs.writeFileSync('patient.json',JSON.stringify(newList, null, 2));
  }

  static addEmployee(id,nama,position,username,password){
    var obj = {}
    obj['id'] = id;
    obj['name'] = nama;
    obj['position'] = position;
    obj['username'] = username;
    obj['password'] = password;
    data_employee.push(obj);
    fs.writeFileSync('employee.json',JSON.stringify(data_employee, null, 2));
  }

  static deleteEmployee(nama){
    let newList = [];
    for (let i=0; i<data_employee.length; i++) {
      if (data_employee[i].name != nama) {
        newList.push(data_employee[i]);
      }
    }
    fs.writeFileSync('employee.json',JSON.stringify(newList, null, 2));
  }

  static loginAsEmployee(){
    rl.question('Who are you?\n[1] Admin\n[2] Doctor\n[3] Receptionist\n[4] Office Boy\nPlease choose user: ', (answer) => {
      this.menu(answer);
    });
  }

  static menu(answer){
    switch (answer) {
      case '1': console.log(' 1.] Logout\n 2.] Daftar Pasien\n 3.] Lihat Rekam Medis [ID Pasien]\n 4.] Daftar Pekerja\n 5.] Tambah Pasien\n 6.] Hapus Data Pasien [ID Pasien]\n 7.] Tambah Data Pekerja\n 8.] Hapus Data Pekerja [nama_pekerja]');
        break;
      case '2': console.log(' 1.] Logout\n 2.] Daftar Pasien\n 3.] Lihat Rekam Medis [ID Pasien]\n 4.] Daftar Pekerja\n 5.] Tambah Pasien\n 6.] Hapus Data Pasien [ID Pasien');
        break;
      case '3': console.log(' 1.] Logout\n 2.] Daftar Pasien\n 3.] Lihat Rekam Medis [ID Pasien]\n 4.] Daftar Pekerja');
        break;
      case '4': console.log(' 1.] Logout');
        break;
      default:
    }
    this.command();
  }

  static command(){
    rl.question('Choose your selection: ', (ans) => {
      switch (ans) {
        // case '1': this.Logout();
        //   break;
        case '2': this.patientList();
          break;
        case '3':
          rl.question('Type Patient ID : ', (id) => {
              console.log('the one'+id);
                this.showPatient(id);
          });
          break;
        case '4':this.employeeList();
          break;
        case '5':
        console.log('ADD NEW PATIENT INFO');
          rl.question('Id: ', (id) => {
            rl.question('Name: ', (nama) => {
              rl.question('Record id: ', (recordId) => {
                rl.question('Record name : ', (recordName) => {
                    this.addPatient(id,nama,recordId,recordName);
                });
              });
            });
          });
        break;
        case '6':
        rl.question('Type Patient ID that want to be deleted below\nId: ', (id) => {
              this.deletePatient(id);
        });
          break;
        case '7':
        console.log('ADD NEW EMPLOYEE INFO');
          rl.question('Id: ', (id) => {
            rl.question('Name: ', (nama) => {
              rl.question('Position: ', (position) => {
                rl.question('Username : ', (username) => {
                  rl.question('Password : ', (password) => {
                    this.addEmployee(id,nama,position,username,password);
                  });
                });
              });
            });
          });
        break;
        case '8':
        rl.question('Type Employee name that want to be deleted below\nName: ', (nama) => {
              this.deleteEmployee(nama);
        });
          break;
        default:
      }
    });
  }


}

class Patient {
  constructor(id, name, record) {
    this.id = id
    this.name = name
    this.record = record
  }
}

class Employee {
  constructor(name, position, username, password) {
    this.name = name
    this.position = position
    this.username = username
    this.password = password
  }
}

Hospital.startHere();

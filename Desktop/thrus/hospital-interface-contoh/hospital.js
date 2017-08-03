const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
})

class Hospital {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.dataPasien = [];
    this.User = [];
    this.dataEmployee = [];
  }

  tambahPasien(data){
    if(data !== undefined){
      this.dataPasien.push(data)
    } else {
      rl.question('\nMenu Tambah Pasien. Masukkan: [ID],[Name],[Penyakit]. Contoh: 1,Yana,Sakit Perut \n'
      ,(input) =>{
        let dataBaru = input.split(',');
        this.tambahPasien(new Patient(dataBaru[0],dataBaru[1],dataBaru[2]));
        this.clear();
        console.log(`\nData pasien baru berhasil ditambahkan!\n\nId:${dataBaru[0]}\nNama:${dataBaru[1]}\nPenyakit:${dataBaru[2]}\n`)
        this.back()
      })
      }
    }

  tambahEmployee(data){
    if(data !== undefined){
      this.dataEmployee.push(data)
    }
    else{
      rl.question('\nMasukkan: [Nama],[Jabatan],[Username],[Password]. Contoh: Asti,Admin,asti,asti \n'
      ,(input) =>{
        let dataBaru = input.split(',')
        this.tambahEmployee(new Employee(dataBaru[0],dataBaru[1],dataBaru[2],dataBaru[3]))
        this.clear()
        console.log(`\nData karyawan baru berhasil ditambahkan!\n\nNama:${dataBaru[0]}\nJabatan:${dataBaru[1]}\nUsername:${dataBaru[2]}\nPassword:${dataBaru[3]}`)
        this.back()
        })
      }
    }

  welcome(user){
    this.clear()
    console.log(`Halo ${user[0]}, you sign in as ${user[2]}`)
    this.menu(user[2])
  }

  menu(user){
    console.log('--------------- Menu ---------------')
    switch(user){
      case 'Admin' : console.log(' 1.] Logout\n 2.] Daftar Pasien\n 3.] Lihat Rekam Medis [ID Pasien]\n 4.] Tambah Pasien\n 5.] Hapus Data Pasien [ID Pasien]\n 6.] Tambah Data Pekerja\n 7.] Daftar Pekerja\n 8.] Hapus Data Pekerja [nama_pekerja]');break
      case 'Dokter': console.log(' 1.] Logout\n 2.] Daftar Pasien\n 3.] Lihat Rekam Medis [ID Pasien]\n 4.] Tambah Pasien\n 5.] Hapus Data Pasien [ID Pasien]');break
      case 'Patient': console.log(' 1.] Logout\n 2.] Daftar Pasien\n 3.] Lihat Rekam Medis [ID Pasien]');break
      case 'Office Boy': console.log(' 1.] Logout');break
      default: console.log('1.] Logout');break
    }
    this.command()
  }

  command(){
    rl.question('\nPilih Menu: ', (input)=>{
      switch(input.split(' ')[0]){
        case '1': this.User = [];this.clear();this.letsPlayBegin();break
        case '2': this.DaftarPasien();this.back();break
        case '3': this.lihatRekamMedis(input.split(' ')[1]);break
        case '4': this.tambahPasien();break
        case '5': this.hapusDataPasien(input.split(' ')[1]);break
        case '6': this.tambahEmployee();break
        case '7': this.daftarEmployee(); this.back();break
        case '8': this.hapusDataEmployee(input.split(' ')[1]);break
      }
    })
  }

  lihatRekamMedis(patientId) {
      this.dataPasien.forEach((data) => {
        if(data.id.toString() === patientId){
          console.log(`Rekam Medis Pasien.\n-------------------`);
            console.log(`ID: ${data.id}\nNama: ${data.name}\nPenyakit: ${data.Penyakit}`);
          this.back()
        }
      })
  }

  hapusDataPasien(id){
    for(let i = 0; i < this.dataPasien.length;i++){
      if(this.dataPasien[i].id === id){
        console.log(`${this.dataPasien[i].name} berhasil dihapus`)
        this.dataPasien.splice(i,1)
        this.back()
        }
      }
    for(let j = 0; j < this.dataPasien.length;j++){
      if(this.dataPasien[j].id !== id){
        console.log(`ID tidak ditemukan!`)
        this.back()
      }
    }
  }

  hapusDataEmployee(name){
    for(let i =0; i < this.dataEmployee.length;i++){
      if(this.dataEmployee[i].name === name){
        console.log(`${this.dataEmployee[i].name} berhasil dihapus`)
      this.dataEmployee.splice(i,1)
        this.back()
      }
  }
    for(let j = 0; j < this.dataEmployee.length;j++){
      if(this.dataEmployee[j].name !== name){
        console.log(`Nama ${name} tidak ditemukan`)
        this.back()
      }
    }
  }

  back(){
    rl.question('\nTekan ENTER untuk kembali ke menu utama', (input)=>{
      if(!input){
        this.welcome(this.User)
      }
      else{
        this.back()
      }
    })
  }

  DaftarPasien(){
      this.clear()
      console.log('Daftar Pasien\n-------------------------\nID | Nama Pasien | Penyakit')
      let id = 0
      this.dataPasien.forEach((data)=>{
        id++
        console.log(`${id} | ${data.name} | ${data.Penyakit}`)
      })
  }

  daftarEmployee(){
    this.clear()
    console.log('Daftar Pekerja\n=========================\nNO | Nama Pekerja | Jabatan')
    let count = 0
    this.dataEmployee.forEach((data)=>{
    count++
    console.log(`${count}  | ${data.name} | ${data.position}`)
    })
  }

  letsPlayBegin(){
    console.log('\n'+`----- SELAMAT DATANG DI SISTEM INFORMASI RS.${this.name} -----\n ${this.location}`)
    console.log('---------------------------------------------------------------');
    rl.question('\nLogin as: \n[1]Pasien \n[2]Pekerja \nMasukkan Pilihan: ', (input)=>{
      if(input === '1'){
        this.loginAsPatient()
      }
      if(input === '2'){
        this.loginAsEmployee()
      }
      else{
        this.clear()
        this.letsPlayBegin()
      }
    })
  }

  loginAsPatient(){
  this.clear()
  rl.question('Nama: \n', (input)=>{
      this.dataPasien.forEach((data)=>{
        if(data.name === input){
          this.User.push(input,' ','Patient')
          this.welcome(this.User)
        }
        else{
          console.log(`Tidak ada nama pasien ${input} di sistem kami`)
          this.letsPlayBegin()
        }
      })
    })
  }

  loginAsEmployee(){
    this.clear()
    rl.question('Username:\n', (input)=>{
        this.dataEmployee.forEach((data)=>{
          if(data.username === input){
            this.User.push(data.name,data.password,data.position)
            this.password()
            }
          })
          if(!this.User){
            this.clear()
            console.log('Username tidak ada')
            this.loginAsEmployee()
          }
        })
      }

  password(){
    this.clear()
    rl.question('Password:\n', (input)=>{
        if(input === this.User[1]){
          this.welcome(this.User)
        }
        else{
          console.log('Password tidak ada')
          this.password()
        }
    })
  }

  clear() {
    console.log("\x1B[2J")
   }
 }

 class Patient {
   constructor(id, name, Penyakit) {
    this.id = id;
    this.name = name;
    this.Penyakit = Penyakit;
   }
 }

 class Employee {
   constructor(name, position, username, password) {
    this.name = name;
    this.position = position;
    this.username = username;
    this.password = password;
   }
 }

let hospital = new Hospital('Sembuh Waras','\nJl. Jalani Aja Dulu \nKemeng\nJakarta Pusat\n')
hospital.tambahPasien(new Patient(1,'Tono','Meriang'))

hospital.tambahEmployee(new Employee('Ahmad','Admin','ahmad','ahmad'))
hospital.tambahEmployee(new Employee('Adith','Dokter','adith','adith'))
hospital.tambahEmployee(new Employee('Arie','Office Boy','arie','arie'))
hospital.letsPlayBegin()

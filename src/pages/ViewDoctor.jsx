import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function AddDoctor() {
  // const [doctor, setDoctor] = useState({
  //   id: '',
  //   firstName: '',
  //   lastName: '',
  //   gender: '',
  //   homePhone: '',
  //   personalPhone: '',
  //   nic: '',
  //   qualification: '',
  //   specialization: '',
  //   address: '',
  //   doctorType: '',
  //   visitingCharge: '',
  //   chanelingCharge: '',
  //   salary: '',
  //   note: '',
  // });

  return (
    <>
      <Nav />

      <section className="py-10 w-5/6 mx-auto">
        <table>
          <thead className="space-x-10">
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>Home phone</th>
            <th>Personal Phone</th>
            <th>NIC</th>
            <th>Qualifications</th>
            <th>Specialization</th>
            <th>Address</th>
            <th>Doctor type</th>
            <th>Visiting charge</th>
            <th>Chaneling charge</th>
            <th>Salary</th>
            <th>Note</th>
          </thead>
          <tbody>
            <tr className=" border border-blue-900  hover:bg-blue-100 ">
              <td className=" ">1</td>
              <td>Fahim</td>
              <td>Hassan</td>
              <td>Male</td>
              <td>017********</td>
              <td>019********</td>
              <td>1</td>
              <td>BSc in Software Engineering</td>
              <td>Web Development</td>
              <td>Jamalpur, Dhaka</td>
              <td>Developer</td>
              <td>10k BDT</td>
              <td>5k BDT</td>
              <td>100k BDT</td>
              <td>Excellent</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Footer />
    </>
  );
}

export default AddDoctor;

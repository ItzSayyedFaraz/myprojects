import React, { useEffect, useState,useContext } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "./firebase/firebase";
import {
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";
import { Appstate } from "../App";
import {useNavigate} from 'react-router-dom'

const Reviews = ({ id, prevRating, userRated }) => {
  const [rating, setRating] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const useAppstate=useContext(Appstate);
  const navigate=useNavigate();
  const[newAdded,setNewAdded]=useState(0)

  const sendReview = async () => {
    
    setLoading(true);
    try {
      if(useAppstate.login){
      await addDoc(reviewsRef, {
        movieid: id,
        name:useAppstate.userName ,
        rating: rating,
        thought: form,
        timestamp: new Date().getTime(),
      });
      swal({
        title: "Review Sent",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      const ref = doc(db, "movies", id);
      await updateDoc(ref, {
        rating: prevRating + rating,
        rated: userRated + 1,
      });

      setRating(0);
      setForm("");
      setNewAdded(newAdded+1)
    }else{
      navigate('/login')
    }
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      let quer = query(reviewsRef, where("movieid", "==", id));
      const querySnapshot = await getDocs(quer);
      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });
      setReviewsLoading(false);
    }
    getData();
  }, [newAdded]);

  return (
    <div className="mt-4 border-t-2 border-gray-700 w-full">
      <ReactStars
        size={30}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
        edit={true}
      />
      <input
        type="text"
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Share your views here"
        className="w-full p-2 outline-none header"
      />
      <button
        onClick={sendReview}
        className="bg-green-600 flex justify-center w-full p-2"
      >
        {loading ? <TailSpin height={18} color="white" /> : "Share"}
      </button>
      {reviewsLoading ? (
        <div className="mt-2 flex justify-center">
          <ThreeDots height={15} color="white" />
        </div>
      ) : (
        <div className="mt-4 ">
          {data.map((e, i) => {
            return (
              <div key={i} className="bg-gray-900 border-b border-gray-600 p-2 mt-2">
                <div className="flex">
                  <p className="text-blue-500">{e.name}</p>
                  <p className="ml-2">
                    {new Date(e.timestamp).toLocaleString()}.
                  </p>
                </div>
                <ReactStars
                  size={15}
                  half={true}
                  value={e.rating}
                  edit={false}
                />
                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;

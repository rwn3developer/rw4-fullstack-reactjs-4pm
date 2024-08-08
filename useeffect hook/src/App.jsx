import { useEffect, useState } from "react"

function App() {

  const [record, setRecord] = useState([])

  let sum = 0

  const getProduct = () => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then((data) => {
        console.log(data.products);

        setRecord(data.products)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }


  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div align="center">
      <table border={1}>
        <thead>
          <tr>
            <th>Srno</th>
            <th>Title</th>
            <th>Des</th>
            <th>Images</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((val, i) => {
              return (
                <tr>
                  <td>{++i}</td>
                  <td>{val.title}</td>
                  <td>{val.description.slice(0, 5)}</td>

                  <td>
                    {
                      val.images.map((im, i) => {
                        return (
                          <img src={im} width="100" />
                        )
                      })
                    }
                  </td>

                  <td width="300">
                      <table width="100%" border={1}>
                          <thead>
                              <th>Srno</th>
                              <th>Name</th>
                              <th>Rating</th>
                              <th>Comment</th>
                              
                          </thead>
                          <tbody>
                              {
                                  val.reviews.map((review,i)=>{
                                   
                                    sum = sum + review.rating
                                      return(
                                        <tr>
                                          <td>{++i}</td>
                                          <td>{review.reviewerName}</td>
                                          <td>{review.rating}</td>
                                          <td>{review.comment}</td>
                                          
                                        </tr>
                                      )
                    
                                  })
                                  
                              }
                              <tr>
                                <td colSpan={2}>Total Rating :- {sum}</td>
                               
                                {
                                  <td colSpan={2}>Avg Rating :- {sum / val.reviews.length }</td>
                                }
                                <p style={{display:"none"}}>{sum=0}</p>
                              </tr>
                             
                          </tbody>
                      </table>
                  </td>
                                
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App

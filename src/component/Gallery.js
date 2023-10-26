import React , {useState} from 'react';
import '../style.css';
import url1 from '../images/Thumbnail Frame.png';
import url2 from '../images/Thumbnail Frame (2).png';
import url3 from '../images/Thumbnail Frame (1).png';

const imagesData = [
  {
    category: 'Announcement',
    images: [
      { title: 'Featured Service', url: url1 },
      { title: 'Weekly Newsletter', url: url2 },
      { title: 'New Product /Service', url: url3 },
    ],
  },

  {
    category: 'Educate & Inform',
    images: [
      { title: 'New Product/Service', url: url1 },
      { title: 'Weekly Newsletter', url: url2 },
      { title: 'Featured Service', url: url3 },
    ],
  },

  {
    category: 'Invitations',
    images: [
      { title: 'Weekly Newsletter', url: url1 },
      { title: 'New Product/Service', url: url2 },
      { title: 'Featured Service', url: url3 },
    ],
  },

  {
    category: 'Ocassions',
    images: [
      { title: 'Weekly Newsletter', url: url1 },
      { title: 'Featured Service', url: url2 },
      { title: 'New Product/Service', url: url3 },
    ],
  },
];


const Gallery = () => {

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedData = imagesData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const totalPages = Math.ceil(imagesData.length / itemsPerPage);
  return (
    <div className="contain">
      {paginatedData.map((category, index) => (
        <div key={index} className="my-4 row">
          <h3 className="col" style={{ fontSize: '16px', fontWeight: '700' }}>
            {category.category}
          </h3>
          
          <div className='row'>
            {category.images.map((image, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card">
                  <img src={image.url} alt={image.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '13px', fontWeight: '700' }}>{image.title}</h5>
                  </div>
                </div>
                <div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="pagination">
        {currentPage > 0 && (
          <button onClick={() => handlePageChange(currentPage - 1)} className="arrow-button">
            ←
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button onClick={() => handlePageChange(currentPage + 1)} className="arrow-button">
            →
          </button>
        )}
      </div>
    </div>
    
  );  
};
export default Gallery;
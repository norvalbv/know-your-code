// import { useContext, useState } from 'react';
// import { useDebounce } from 'use-debounce';
// import { SelectedQuestionType } from '../context/selectedquestion';

// export const SearchQuestions = () => {
//   const [search, setSearch] = useState('');

//   const questiontype = useContext(SelectedQuestionType);

//   const [noData, setNoData] = useState(false);
//   // const [debounceValue] = useDebounce(search, 500);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//     console.log(e.target.value);
//     // handleSearchQuestion(e);
//   };

//   const handleSearchSubmit = async (e) => {
//     if (!search) {
//       return getPopularQuestions();
//     }
//     e.preventDefault();
//     try {
//       const data = await fetch(
//         `/${selectedTopic}/search/${questiontype.type}/${search}`
//       );
//       const response = await data.json();
//       setQuestions(response);
//       if (response.length === 0) {
//         return setNoData(true);
//       }
//       setNoData(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <form onSubmit={handleSearchSubmit}>
//       <input
//         type="text"
//         placeholder="Search Questions"
//         value={search}
//         onChange={handleSearchChange}
//         className="trending-questions__search"
//       />
//     </form>
//   );
// };

import ClipLoader from 'react-spinners/ClipLoader';
export const Loading = () => {
  return (
    <ClipLoader
      color={'#86D7B7'}
      loading={true}
      css={''}
      speedMultiplier={0.5}
      size={25}
    />
  );
};

export default Loading;

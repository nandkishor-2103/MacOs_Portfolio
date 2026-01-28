import WindowControls from '#components/WindowControls';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <p className='text-sm font-medium flex-1 text-center'>{name}</p>
      </div>

      <div className='bg-white h-full overflow-y-auto flex flex-col items-center justify-center p-6'>
        <div className='max-w-4xl w-full flex flex-col items-center'>
          {imageUrl && (
            <img src={imageUrl} alt={name} className='w-full rounded-lg' />
          )}
        </div>
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;

import WindowControls from '#components/WindowControls';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id='window-header'>
        <WindowControls target='txtfile' />
        <p className='text-sm font-medium flex-1 text-center'>{name}</p>
      </div>

      <div className='bg-white h-full overflow-y-auto p-6'>
        <div className='max-w-2xl'>
          {image && (
            <div className='mb-6'>
              <img src={image} alt={name} className='w-full rounded-lg' />
            </div>
          )}

          {subtitle && <p className='text-lg text-black font-medium mb-6'>{subtitle}</p>}

          {description && Array.isArray(description) && (
            <div className='space-y-3'>
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className='text-base text-gray-800 leading-relaxed'
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;

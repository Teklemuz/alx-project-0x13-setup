import { GeneratedImageProps } from '@/interfaces';

const ImageCard: React.FC<GeneratedImageProps> = ({
  imageUrl,
  prompt,
  width,
  action,
}) => {
  return (
    <div
      onClick={() => action(imageUrl)}
      className="mt-6 border hover:cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
    >
      {/* Image with responsive width and shadow */}
      <img
        src={imageUrl}
        alt={prompt} // Use the prompt as the alt text for accessibility
        className="w-full max-w-md rounded-lg shadow-md"
      />
      
      {/* Prompt heading with conditional text size based on width */}
      <h2 className={`${width ? 'text-sm' : 'text-xl'} font-semibold mt-2`}>
        Your Prompt:
      </h2>

      {/* Prompt text with dynamic font size based on width */}
      <p className={`${width ? 'text-xs' : 'text-lg'} text-gray-700 mb-4`}>
        {prompt}
      </p>
    </div>
  );
}

export default ImageCard;

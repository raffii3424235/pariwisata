export const Card = () => {
  return (
    <div className="rounded-md overflow-hidden bg-dark shadow-lg">
      <img src="/images/gunung.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Gunung Slamet</div>
        <p class="text-gray-400 text-justify text-base">
          Sebuah gunung berapi yang berada di Jawa Tengah, Indonesia.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-green rounded-full px-3 py-1 text-xs font-semibold text-semi_dark mr-2 mb-2">
          #pegunungan
        </span>
        <span class="inline-block bg-green rounded-full px-3 py-1 text-xs font-semibold text-semi_dark mr-2 mb-2">
          #raveling
        </span>
        <span class="inline-block bg-green rounded-full px-3 py-1 text-xs font-semibold text-semi_dark mr-2 mb-2">
          #banyumas
        </span>
      </div>
    </div>
  );
};

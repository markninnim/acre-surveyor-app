import { useState } from 'react';

export default function SurveyQuoteForm() {
  const [formData, setFormData] = useState({
    surveyor: '',
    name: '',
    postcode: '',
    value: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Submitting form:', formData);

    try {
      const propertyValue = parseInt(formData.value, 10);
      let estimatedQuote;
      if (propertyValue <= 100000) estimatedQuote = 299;
      else if (propertyValue <= 200000) estimatedQuote = 349;
      else if (propertyValue <= 300000) estimatedQuote = 399;
      else if (propertyValue <= 400000) estimatedQuote = 449;
      else if (propertyValue <= 500000) estimatedQuote = 499;
      else if (propertyValue <= 600000) estimatedQuote = 549;
      else if (propertyValue <= 700000) estimatedQuote = 599;
      else if (propertyValue <= 800000) estimatedQuote = 649;
      else if (propertyValue <= 900000) estimatedQuote = 699;
      else if (propertyValue <= 1000000) estimatedQuote = 749;
      else if (propertyValue <= 1250000) estimatedQuote = 799;
      else if (propertyValue <= 1500000) estimatedQuote = 899;
      else if (propertyValue <= 1750000) estimatedQuote = 949;
      else if (propertyValue <= 2000000) estimatedQuote = 999;
      else estimatedQuote = 'Price on application';

      setQuote(estimatedQuote);
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit', err);
      alert('Something went wrong while submitting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logoUrl = "https://acresurveying.co.uk/wp-content/uploads/2025/02/acre-surveying-logo.png";

  if (submitted) {
    const firstName = formData.surveyor.split(' ')[0];
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#EAE4FB] to-white">
        <div className="font-sans w-full max-w-md mx-auto px-4 py-10 sm:px-6 text-center animate-fade-in">
          <img src={logoUrl} alt="Logo" className="mx-auto mb-6 h-12" />
          <h2 className="text-xl font-bold text-[#312e81] mb-4">Thank you {firstName}!</h2>
          <p className="text-gray-700">
            By referring customers like this, you are helping to support the business with good quality referral-based work — which is how you help us to drive fees up and also reward you.
          </p>
          <p className="text-gray-700 mt-2">
            Thank you for your support, {firstName}.<br />Keep up the great work.
          </p>
          <p className="text-lg font-semibold text-[#312e81] mt-6">Estimated Survey Quote:</p>
          <div className="my-2 border-t border-gray-300 w-1/2 mx-auto"></div>
          <p className="text-2xl font-bold text-[#312e81] mt-2">£{quote} (incl. VAT)</p>
          <button onClick={() => {
            setSubmitted(false);
            setFormData({
              surveyor: '',
              name: '',
              postcode: '',
              value: '',
              email: '',
              phone: '',
            });
          }}
            className="mt-6 bg-[#312e81] text-white px-4 py-2 rounded hover:bg-[#252162]"
          >
            Submit Another Quote Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#EAE4FB] to-white">
      <div className="font-sans w-full max-w-md mx-auto px-4 py-6 sm:px-6">
        <img src={logoUrl} alt="Logo" className="mx-auto mb-8 h-12" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 sm:text-lg text-base border border-[#312e81] rounded"
          />
          <input
            name="postcode"
            placeholder="Postcode"
            value={formData.postcode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#312e81] rounded"
          />
          <input
            name="value"
            placeholder="Value"
            type="number"
            value={formData.value}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#312e81] rounded"
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#312e81] rounded"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#312e81] rounded"
          />

          <div className="my-4 border-t border-gray-300"></div>

          <div>
            <select
              name="surveyor"
              value={formData.surveyor}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 sm:text-lg text-base border border-[#312e81] rounded h-12"
            >
              <option value="" disabled>Your Name</option>
              <option value="Adrian Watts">Adrian Watts</option>
              <option value="Claire Austin">Claire Austin</option>
              <option value="Clive Browne">Clive Browne</option>
              <option value="Emmanuel Baker">Emmanuel Baker</option>
              <option value="John Frost">John Frost</option>
              <option value="Lyndsey Milburn">Lyndsey Milburn</option>
              <option value="Mike King">Mike King</option>
              <option value="Nicola James-David">Nicola James-David</option>
              <option value="Rachel Farr-Drejer">Rachel Farr-Drejer</option>
              <option value="Rob Crowe">Rob Crowe</option>
              <option value="Robert Yates">Robert Yates</option>
              <option value="Ruby Chand">Ruby Chand</option>
              <option value="Stuart Bridgewater">Stuart Bridgewater</option>
              <option value="Tim McCormick">Tim McCormick</option>
              <option value="Tony Wyatt">Tony Wyatt</option>
              <option value="Trevor Moffatt">Trevor Moffatt</option>
              <option value="Tristan King">Tristan King</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#312e81] text-white px-5 py-3 rounded hover:bg-[#252162]"
          >
            {loading ? 'Sending...' : 'Request A Quote'}
          </button>
        </form>
        <p className="mt-6 text-sm text-[#312e81] text-center font-medium bg-indigo-50 border border-indigo-200 p-3 rounded-lg shadow-sm">
          Upon submitting this information the homeowner will receive a bespoke quotation based on their property value. If they are happy with the quote, they can follow the booking link and pay online.
        </p>
      </div>
    </div>
  );
}

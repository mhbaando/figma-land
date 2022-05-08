import './Testimonials.scss';
import Images from '../../constants/index';
const Testimonials = () => {
  return (
    <section className="fg__testimonails">
      <h1>Testimonials</h1>
      <div className="fg__testimonials-container">
        {/* tetsimonial -1 */}
        <div className="testimonial">
          <div className="title-holder">
            <img src={Images.Bell} alt="Person One" />
            <div className="title">
              <h4>Claire Bell</h4>
              <p>Designer</p>
            </div>
          </div>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </p>
        </div>

        {/* tetsimonial -2 */}
        <div className="testimonial">
          <div className="title-holder">
            <img src={Images.Lane} alt="Person One" />
            <div className="title">
              <h4>Francisco Lane</h4>
              <p>Designer</p>
            </div>
          </div>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.
          </p>
        </div>

        {/* tetsimonial -3 */}
        <div className="testimonial">
          <div className="title-holder">
            <img src={Images.Fisher} alt="Person One" />
            <div className="title">
              <h4>Ralph Fisher</h4>
              <p>Designer</p>
            </div>
          </div>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.
          </p>
        </div>

        {/* tetsimonial -4 */}
        <div className="testimonial">
          <div className="title-holder">
            <img src={Images.Murphy} alt="Person One" />
            <div className="title">
              <h4>Jorge Murphy</h4>
              <p>Designer</p>
            </div>
          </div>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year. Slate helps you see how
            many more days you need to work to reach your financial goal for the
            month and year.your financial goal for the month and year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

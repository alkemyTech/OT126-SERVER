const testimonialsService = require('../services/testimonials');

const remove = async (req, res, next) => {
  try {
    await testimonialsService.remove(req.params.id);
    res.status(200).json({ msg: `Testimonial ${req.params.id} removed succesfully` });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const data = await testimonialsService.update(req.params.id, req.body);

    if(data[0] == 0){
      res.status(400).json({ error: `Testimonial ${req.params.id} don't exist` });
    };

    res.status(200).json({ msg: `Testimonial ${req.params.id} updated succesfully`, data: req.body   });

  } catch (e) {
    next(e);
  }
}

module.exports = {
  update,
  remove
};
